import { useEffect, useRef, useState } from "react";

type Options = {
  itemCount: number;
  baseFlex?: number;
  maxFlex?: number;
  activeFlex?: number;
  smoothing?: number;
  influence?: number;
};

export function useProximityExpand({
  itemCount,
  baseFlex = 1,
  maxFlex = 3,
  activeFlex = 6,
  smoothing = 0.08,
  influence = 0.3,
}: Options) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const targetFlex = useRef<number[]>([]);
  const currentFlex = useRef<number[]>([]);
  const rafId = useRef<number | null>(null);
  const lastActive = useRef<number | null>(null);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    targetFlex.current = Array.from(
      { length: itemCount },
      (_, i) => targetFlex.current[i] ?? baseFlex,
    );

    currentFlex.current = Array.from(
      { length: itemCount },
      (_, i) => currentFlex.current[i] ?? baseFlex,
    );

    itemRefs.current.length = itemCount;
  }, [itemCount, baseFlex]);

  const setItemRef = (index: number) => (el: HTMLDivElement | null) => {
    itemRefs.current[index] = el;
  };

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const tick = () => {
      let settled = true;

      for (let i = 0; i < itemCount; i++) {
        const current = currentFlex.current[i] ?? baseFlex;
        const target = targetFlex.current[i] ?? baseFlex;

        const diff = target - current;

        if (Math.abs(diff) > 0.001) {
          currentFlex.current[i] = current + diff * smoothing;
          settled = false;
        } else {
          currentFlex.current[i] = target;
        }

        const el = itemRefs.current[i];

        if (el) {
          el.style.flex = `${currentFlex.current[i]}`;
        }
      }

      if (settled) {
        rafId.current = null;
      } else {
        rafId.current = requestAnimationFrame(tick);
      }
    };

    const startAnimating = () => {
      if (rafId.current === null) {
        rafId.current = requestAnimationFrame(tick);
      }
    };

    const updateActive = (index: number | null) => {
      if (index !== lastActive.current) {
        lastActive.current = index;
        setActiveIndex(index);
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      const bounds = container.getBoundingClientRect();

      if (bounds.width <= 0) {
        return;
      }

      const relativeX = event.clientX - bounds.left;

      let hitIndex: number | null = null;

      for (let i = 0; i < itemCount; i++) {
        const el = itemRefs.current[i];

        if (!el) {
          continue;
        }

        const itemBounds = el.getBoundingClientRect();

        const centerX = itemBounds.left + itemBounds.width / 2 - bounds.left;

        const distance = Math.abs(relativeX - centerX);

        const closeness = Math.max(
          0,
          1 - distance / (bounds.width * influence),
        );

        targetFlex.current[i] =
          baseFlex + (maxFlex - baseFlex) * closeness * closeness;

        if (
          event.clientX >= itemBounds.left &&
          event.clientX <= itemBounds.right &&
          event.clientY >= itemBounds.top &&
          event.clientY <= itemBounds.bottom
        ) {
          hitIndex = i;
        }
      }

      if (hitIndex !== null) {
        targetFlex.current[hitIndex] = activeFlex;
      }

      updateActive(hitIndex);
      startAnimating();
    };

    const handleMouseLeave = () => {
      for (let i = 0; i < itemCount; i++) {
        targetFlex.current[i] = baseFlex;
      }

      updateActive(null);
      startAnimating();
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);

      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
    };
  }, [itemCount, baseFlex, maxFlex, activeFlex, smoothing, influence]);

  return {
    containerRef,
    setItemRef,
    activeIndex,
  };
}
