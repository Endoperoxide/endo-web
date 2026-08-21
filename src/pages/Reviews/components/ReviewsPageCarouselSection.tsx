import { useState } from "react";
import GameCardCarousel from "@/components/GameCardCarousel/GameCardCarousel";
import TriangleBackground from "@/components/TriangleBackground";
import type { Game } from "@/utils/game_utils";

const PARALLAX_FACTOR = 0.15;

type Properties = {
  games: Game[];
  onCardSelect: (game: Game) => void;
  onActiveChange: (index: number) => void;
};

export default function ReviewsPageCarouselSection({
  games,
  onCardSelect,
  onActiveChange,
}: Properties) {
  const [offset, setOffset] = useState(0);

  return (
    <section className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden">
      {/* Background */}
      <TriangleBackground offset={offset} parallaxFactor={PARALLAX_FACTOR} />

      <div className="relative z-1 flex h-full w-full items-center justify-center">
        {/* Carousel */}
        <GameCardCarousel
          games={games}
          onSelect={onCardSelect}
          onActiveChange={onActiveChange}
          onOffsetChange={setOffset}
        />
      </div>
    </section>
  );
}
