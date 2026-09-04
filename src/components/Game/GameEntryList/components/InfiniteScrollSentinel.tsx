import { useEffect, useRef } from "react";

type Props = {
  onIntersect: () => void;
  enabled: boolean;
};

export default function InfiniteScrollSentinel({
  onIntersect,
  enabled,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onIntersect();
      },
      { rootMargin: "400px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [onIntersect, enabled]);

  return <div ref={ref} className="h-1" />;
}
