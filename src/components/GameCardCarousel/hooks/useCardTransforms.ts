import { useLayoutEffect, useRef } from "react";

const MAX_ROTATE = 32;
const MAX_DEPTH = 320;
const MAX_SCALE_LOSS = 0.2;

type Params = {
  offset: number;
  length: number;
  onActiveChange?: (index: number) => void;
  onMeasure?: (spacing: number) => void;
};

export function useCardTransforms({
  offset,
  length,
  onActiveChange,
  onMeasure,
}: Params) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const update = () => {
      const cards = wrapper.querySelectorAll<HTMLElement>("[data-card]");

      const center =
        wrapper.getBoundingClientRect().left + wrapper.clientWidth / 2;

      const flowCenters: number[] = [];
      cards.forEach((card) => {
        flowCenters.push(card.offsetLeft + card.offsetWidth / 2);
      });

      const entries = Array.from(cards).map((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = (cardCenter - center) / (wrapper.clientWidth / 2);
        return { card, index, distance, abs: Math.abs(distance) };
      });

      const active = entries.reduce((closest, entry) =>
        entry.abs < closest.abs ? entry : closest,
      ).index;

      const ranked = [...entries].sort((a, b) => a.abs - b.abs);
      const zIndexByIndex = new Map<number, number>();
      ranked.forEach((entry, rank) => {
        zIndexByIndex.set(entry.index, entries.length - rank);
      });

      entries.forEach(({ card, index, distance, abs }) => {
        const rotate = -distance * MAX_ROTATE;
        const depth = -Math.pow(abs, 1.4) * MAX_DEPTH;
        const scale =
          1 - Math.min(MAX_SCALE_LOSS, Math.pow(abs, 1.5) * MAX_SCALE_LOSS);

        card.style.transformOrigin =
          distance > 0
            ? "left center"
            : distance < 0
              ? "right center"
              : "center";

        card.style.zIndex = String(zIndexByIndex.get(index));
        card.style.transform = `
          perspective(2200px)
          translateZ(${depth}px)
          rotateY(${rotate}deg)
          scale(${scale})
        `;
      });

      if (flowCenters.length > 1) {
        const spacing = Math.round(flowCenters[1] - flowCenters[0]);
        if (spacing > 0) onMeasure?.(spacing);
      } else if (cards[0]) {
        onMeasure?.(cards[0].offsetWidth);
      }

      onActiveChange?.(active % length);
    };

    update();

    const observer = new ResizeObserver(update);
    observer.observe(wrapper);

    return () => observer.disconnect();
  }, [offset, length, onActiveChange]);

  return { wrapperRef };
}
