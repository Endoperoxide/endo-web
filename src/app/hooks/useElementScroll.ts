import { useEffect, useState, type RefObject } from "react";

export function useElementScroll(ref: RefObject<HTMLElement | null>) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame: number | undefined;

    const handleScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        setScrollY(el.scrollTop);
        frame = undefined;
      });
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ref]);

  return scrollY;
}
