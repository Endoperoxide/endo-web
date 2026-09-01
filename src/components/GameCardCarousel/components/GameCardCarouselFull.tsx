import { useState, useEffect } from "react";
import type { Game } from "@/utils/game_utils";
import GameCard from "@/components/Game/GameCard";
import { useCarouselScroll } from "@/components/GameCardCarousel/hooks/useCarouselScroll";
import { useCardTransforms } from "@/components/GameCardCarousel/hooks/useCardTransforms";

const FALLBACK_CARD_SPACING = 470;
const DEFAULT_HEIGHT_CLASSES =
  "h-[clamp(340px,45vh,500px)] sm:h-[clamp(300px,50vh,450px)]";

type Props = {
  games: Game[];
  cardHeight?: string;
  onSelect?: (game: Game) => void;
  onActiveChange?: (index: number) => void;
  onOffsetChange?: (offset: number) => void;
};

export default function GameCardCarouselFull({
  games,
  onSelect,
  cardHeight,
  onActiveChange,
  onOffsetChange,
}: Props) {
  const [cardSpacing, setCardSpacing] = useState(FALLBACK_CARD_SPACING);

  const halfRange = Math.max(0, ((games.length - 1) * cardSpacing) / 2);
  const minOffset = -halfRange;
  const maxOffset = halfRange;

  const step =
    games.length > 1 ? (maxOffset - minOffset) / (games.length - 1) : 0;

  const { containerRef, offset, scrollToIndex } = useCarouselScroll({
    length: games.length,
    minOffset,
    maxOffset,
    step,
    onActiveChange,
  });

  const { wrapperRef } = useCardTransforms({
    offset,
    length: games.length,
    onActiveChange,
    onMeasure: setCardSpacing,
  });

  function handleCardClick(game: Game) {
    const index = games.indexOf(game);

    if (index !== -1) {
      scrollToIndex(index);
      onActiveChange?.(index);
    }

    onSelect?.(game);
  }

  useEffect(() => {
    onOffsetChange?.(offset);
  }, [offset, onOffsetChange]);

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden">
      <section
        ref={wrapperRef}
        className="flex h-full w-full items-center justify-center overflow-hidden"
      >
        <div
          ref={containerRef}
          className="flex w-max items-center gap-5 touch-none will-change-transform"
          style={{ transform: `translateX(${-offset}px)` }}
        >
          {/* List of all cards */}
          {games.map((game, index) => (
            <div
              key={`${game.slug}-${index}`}
              data-card
              className={`aspect-2/3 shrink-0 min-w-0 transform-3d will-change-transform ${
                cardHeight ? "" : DEFAULT_HEIGHT_CLASSES
              } ${index !== 0 ? "max-sm:-ml-20" : ""}`}
              style={cardHeight ? { height: cardHeight } : undefined}
            >
              <GameCard game={game} onClick={() => handleCardClick(game)} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
