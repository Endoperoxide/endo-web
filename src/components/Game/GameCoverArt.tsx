import type { Game } from "@/utils/game_utils";

type Properties = {
  game: Game;
};

export default function GameCoverArt({ game }: Properties) {
  return (
    <div className="relative">
      {/* Image art */}
      <img
        className={`w-full h-full object-contain`}
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
