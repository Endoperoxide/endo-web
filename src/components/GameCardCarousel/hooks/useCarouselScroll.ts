import { useLayoutEffect, useRef, useEffect, useState } from "react";

const SCROLL_LERP = 0.1;
const SNAP_DELAY_MS = 500;
const SETTLE_EPSILON = 0.05;

function clamp(n: number, min: number, max: number) {
  return Math.min(Math.max(n, min), max);
}

type Params = {
  length: number;
  minOffset: number;
  maxOffset: number;
  step: number;
  onActiveChange?: (index: number) => void;
};

export function useCarouselScroll({
  length,
  minOffset,
  maxOffset,
  step,
  onActiveChange,
}: Params) {
  const [offset, setOffset] = useState(minOffset);
  const containerRef = useRef<HTMLDivElement>(null);
  const target = useRef(minOffset);
  const current = useRef(minOffset);

  const boundsRef = useRef({ minOffset, maxOffset, step });
  const onActiveChangeRef = useRef(onActiveChange);
  const rafRef = useRef<number | null>(null);
  const runningRef = useRef(false);
  const hasInteractedRef = useRef(false);

  useEffect(() => {
    boundsRef.current = { minOffset, maxOffset, step };

    if (!hasInteractedRef.current) {
      current.current = minOffset;
      target.current = minOffset;
      setOffset(minOffset);
      return;
    }

    target.current = clamp(target.current, minOffset, maxOffset);
    current.current = clamp(current.current, minOffset, maxOffset);
  }, [minOffset, maxOffset, step]);

  useEffect(() => {
    onActiveChangeRef.current = onActiveChange;
  }, [onActiveChange]);

  function offsetForIndex(index: number) {
    const bounds = boundsRef.current;
    if (!bounds.step) return bounds.minOffset;
    return clamp(
      bounds.minOffset + index * bounds.step,
      bounds.minOffset,
      bounds.maxOffset,
    );
  }

  function tick() {
    const { minOffset, maxOffset } = boundsRef.current;
    current.current += (target.current - current.current) * SCROLL_LERP;
    current.current = clamp(current.current, minOffset, maxOffset);
    target.current = clamp(target.current, minOffset, maxOffset);

    if (Math.abs(target.current - current.current) < SETTLE_EPSILON) {
      current.current = target.current;
      setOffset(current.current);
      runningRef.current = false;
      rafRef.current = null;
      return;
    }

    setOffset(current.current);
    rafRef.current = requestAnimationFrame(tick);
  }

  function startLoop() {
    if (runningRef.current) return;
    runningRef.current = true;
    rafRef.current = requestAnimationFrame(tick);
  }

  function scrollToIndex(index: number) {
    hasInteractedRef.current = true;
    target.current = offsetForIndex(index);
    startLoop();
  }

  useLayoutEffect(() => {
    const startOffset = boundsRef.current.minOffset;
    current.current = startOffset;
    target.current = startOffset;
    setOffset(startOffset);
    hasInteractedRef.current = false;
    runningRef.current = false;
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;

    if (!length) return;

    let snapTimer: number | null = null;

    function scheduleSnap() {
      if (snapTimer !== null) window.clearTimeout(snapTimer);

      snapTimer = window.setTimeout(() => {
        const { minOffset, step } = boundsRef.current;
        if (!step) return;

        const nearestIndex = clamp(
          Math.round((target.current - minOffset) / step),
          0,
          length - 1,
        );

        target.current = offsetForIndex(nearestIndex);
        onActiveChangeRef.current?.(nearestIndex);
        startLoop();
      }, SNAP_DELAY_MS);
    }

    function wheel(event: WheelEvent) {
      hasInteractedRef.current = true;
      event.preventDefault();
      event.stopPropagation();
      target.current += event.deltaY;
      startLoop();
      scheduleSnap();
    }

    let lastTouchX = 0;

    function touchStart(event: TouchEvent) {
      if (event.touches.length !== 1) return;
      hasInteractedRef.current = true;
      lastTouchX = event.touches[0].clientX;
      if (snapTimer !== null) window.clearTimeout(snapTimer);
    }

    function touchMove(event: TouchEvent) {
      if (event.touches.length !== 1) return;
      event.preventDefault();

      const currentX = event.touches[0].clientX;
      const deltaX = lastTouchX - currentX;
      target.current += deltaX;
      lastTouchX = currentX;
      startLoop();
    }

    function touchEnd() {
      scheduleSnap();
    }

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", wheel, { passive: false });
      container.addEventListener("touchstart", touchStart, { passive: true });
      container.addEventListener("touchmove", touchMove, { passive: false });
      container.addEventListener("touchend", touchEnd, { passive: true });
      container.addEventListener("touchcancel", touchEnd, { passive: true });
    }

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      runningRef.current = false;
      if (container) {
        container.removeEventListener("wheel", wheel);
        container.removeEventListener("touchstart", touchStart);
        container.removeEventListener("touchmove", touchMove);
        container.removeEventListener("touchend", touchEnd);
        container.removeEventListener("touchcancel", touchEnd);
      }
      if (snapTimer !== null) window.clearTimeout(snapTimer);
    };
  }, [length]);

  return { containerRef, offset, scrollToIndex };
}
