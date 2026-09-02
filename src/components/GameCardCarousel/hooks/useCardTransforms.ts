import { useLayoutEffect, useRef } from "react";

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
        return { index, abs: Math.abs(distance) };
      });

      const active = entries.reduce((closest, entry) =>
        entry.abs < closest.abs ? entry : closest,
      ).index;

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
