import { RefObject, useEffect } from "react";

export function useScrollToTop(
  ref: RefObject<HTMLElement | null>,
  dependency: unknown,
) {
  useEffect(() => {
    ref.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [dependency, ref]);
}
