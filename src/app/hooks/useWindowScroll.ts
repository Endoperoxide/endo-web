import { useEffect, useRef, useState } from "react";

export function useWindowScroll(smoothing = 0.025) {
  const [scrollY, setScrollY] = useState(0);
  const targetRef = useRef(0);
  const currentRef = useRef(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      targetRef.current = window.scrollY;
    };

    const tick = () => {
      currentRef.current +=
        (targetRef.current - currentRef.current) * smoothing;

      // Snap once close enough to avoid endless tiny re-renders
      if (Math.abs(targetRef.current - currentRef.current) < 0.1) {
        currentRef.current = targetRef.current;
      }

      setScrollY(currentRef.current);
      frameRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    frameRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [smoothing]);

  return scrollY;
}
