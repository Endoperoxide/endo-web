import { useEffect, useRef, useState } from "react";
import { Game } from "@/utils/game_utils";
import GameSegment from "./GameSegment";
import { useCarouselScroll } from "@/components/GameCardCarousel/hooks/useCarouselScroll";

const GAP = 12;

type Properties = {
  games: Game[];
  onSelect?: (game: Game) => void;
  onActiveChange?: (index: number) => void;
};

export default function GameSegmentScroller({
  games,
  onSelect,
  onActiveChange,
}: Properties) {
  const firstCardRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const el = firstCardRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width;
      if (width) setCardWidth(width);
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [games.length]);

  const step = cardWidth + GAP;

  const { containerRef, offset, scrollToIndex } = useCarouselScroll({
    length: games.length,
    minOffset: 0,
    maxOffset: Math.max(0, (games.length - 1) * step),
    step,
  });

  const activeIndex = step
    ? Math.min(games.length - 1, Math.max(0, Math.round(offset / step)))
    : 0;

  useEffect(() => {
    onActiveChange?.(activeIndex);
  }, [activeIndex, onActiveChange]);

  return (
    <div ref={containerRef} className="flex h-full w-full overflow-hidden">
      <div
        className="flex h-full"
        style={{ gap: GAP, transform: `translateX(${-offset}px)` }}
      >
        {games.map((game, index) => (
          <div
            key={game.slug}
            ref={index === 0 ? firstCardRef : undefined}
            className="h-full shrink-0"
          >
            <GameSegment
              game={game}
              active={index === activeIndex}
              onClick={() => {
                scrollToIndex(index);
                onSelect?.(game);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
