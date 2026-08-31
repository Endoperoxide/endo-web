import { useState } from "react";
import GameCardCarousel from "@/components/GameCardCarousel/GameCardCarousel";
import type { Game } from "@/utils/game_utils";

type Properties = {
  games: Game[];
  onCardSelect: (game: Game) => void;
  onActiveChange: (index: number) => void;
};

export default function ReviewsPageSearchCarousel({
  games,
  onCardSelect,
  onActiveChange,
}: Properties) {
  const [offset, setOffset] = useState(0);

  return (
    <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden">
      <div className="relative z-1 flex h-full w-full items-center justify-center">
        {/* Carousel */}
        <GameCardCarousel
          games={games}
          onSelect={onCardSelect}
          onActiveChange={onActiveChange}
          onOffsetChange={setOffset}
        />
      </div>
    </div>
  );
}
