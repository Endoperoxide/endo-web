import { Game } from "@/utils/game_utils";
import { Star } from "lucide-react";
import GameCoverArt from "../Game/GameCoverArt";
import DiagonalStripes from "../DiagonalStripes";

type Properties = {
  game: Game;
  active?: boolean;
  onClick?: () => void;
};

export default function GameSegment({
  game,
  active = false,
  onClick,
}: Properties) {
  return (
    <button
      onClick={onClick}
      className={`flex h-full w-full flex-col gap-2 overflow-hidden rounded-md px-3 py-4 text-left transition-colors duration-300 ${
        active ? "bg-background-highlight" : "bg-black"
      }`}
    >
      <div className="flex flex-row items-center justify-center gap-1.5">
        <h1
          className={`text-3xl font-black ${active ? "text-white" : "text-text-accent"}`}
        >
          {game.rating}
        </h1>
        <Star
          size={14}
          className={active ? "text-white" : "text-text-accent"}
          fill="currentColor"
        />
      </div>

      <h1
        className={`truncate text-sm font-bold ${active ? "text-white" : "text-text-accent"}`}
      >
        {game.title}
      </h1>

      <div className="min-h-0 w-full flex-1">
        <GameCoverArt game={game} />
      </div>

      <DiagonalStripes />
    </button>
  );
}
