import type { Game } from "@/utils/game_utils";

type Properties = {
  game: Game;
};

export default function GameCoverArt({ game }: Properties) {
  return (
    <div className="relative w-full aspect-3/4">
      {/* Image art */}
      <img
        className="h-full w-full object-cover"
        src={game.coverUrl}
        alt={game.title}
        fetchPriority="low"
        loading="lazy"
        decoding="async"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-cover" />
    </div>
  );
}
