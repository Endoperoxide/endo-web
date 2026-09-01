// GameCard.tsx
import type { Game } from "@/utils/game_utils";
import GameCoverArt from "@/components/Game/GameCoverArt";
import GameTitle from "@/components/Game/GameTitle";
import GameRating from "./GameRating";

type Properties = {
  game: Game;
  onClick?: () => void;
};

export default function GameCard({ game, onClick }: Properties) {
  return (
    <button
      onClick={onClick}
      className="relative block w-full cursor-pointer appearance-none border-0 bg-background-highlight overflow-hidden"
    >
      <div className="flex flex-col">
        <div className="p-1">
          <GameCoverArt game={game} />
        </div>
        <div className="flex flex-row items-center p-1 pt-0 text-left">
          <div className="min-w-0 flex-1">
            <GameTitle game={game} metaColor="text-text-dark" />
          </div>
          <div className="shrink-0 bg-background-main p-2">
            <GameRating game={game} barSide="right" />
          </div>
        </div>
      </div>
    </button>
  );
}
