import type { Game } from "@/utils/game_utils";
import GameTitle from "@/components/Game/GameTitle";
import GameRating from "@/components/Game/GameRating";
import GameModalInfo from "./GameModalInfo";
import GameModalReview from "./GameModalReview";
import { X } from "lucide-react";

type Properties = {
  game: Game;
  onClose: () => void;
};

export default function GameModalContent({ game, onClose }: Properties) {
  return (
    <div>
      {/* Sticky header */}
      <div className="sticky top-0 z-5 border-b border-border-base bg-background-main">
        <div className="flex justify-end">
          {/* Close button */}
          <button
            onClick={onClose}
            className="flex h-6 w-6 cursor-pointer border-l border-b border-border-base justify-center items-center text-secondary"
          >
            <X size={15} strokeWidth={2} />
          </button>
        </div>

        <div className="flex items-center gap-2 p-4">
          {/* Title */}
          <div className="min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">
            <GameTitle game={game} />
          </div>

          {/* Rating */}
          <div className="ml-auto shrink-0">
            <GameRating game={game} barSide="right" />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="px-7 py-5">
        {/* Game breakdown */}
        <GameModalInfo game={game} />

        {/* Game review */}
        <div className="mt-5">
          <GameModalReview game={game} />
        </div>
      </div>
    </div>
  );
}
