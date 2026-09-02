import { useEffect, useState, type RefObject } from "react";

export function useElementScroll(ref: RefObject<HTMLElement | null>) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let frame: number | undefined;

    const handleScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        setScrollY(element.scrollTop);
        frame = undefined;
      });
    };

    element.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      element.removeEventListener("scroll", handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ref]);

  return scrollY;
}
