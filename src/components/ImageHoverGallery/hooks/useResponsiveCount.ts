import { useEffect, useState } from "react";

/**
 * Breakpoints checked from largest to smallest; the first matching
 * minWidth wins. `base` is the fallback below all of them.
 */
type Breakpoint = { minWidth: number; count: number };

export function useResponsiveCount(breakpoints: Breakpoint[], base: number) {
  const sorted = [...breakpoints].sort((a, b) => b.minWidth - a.minWidth);

  const computeCount = () => {
    if (typeof window === "undefined") return base;
    const width = window.innerWidth;
    const match = sorted.find((bp) => width >= bp.minWidth);
    return match ? match.count : base;
  };

  const [count, setCount] = useState(computeCount);

  useEffect(() => {
    const handleResize = () => setCount(computeCount());
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [JSON.stringify(sorted), base]);

  return count;
}
