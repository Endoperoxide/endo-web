import type { Game } from "@/utils/game_utils";
import ModalHeaderSection from "@/components/Modal/components/ModalHeader";
import GameTitle from "@/components/Game/GameTitle";
import GameRating from "@/components/Game/GameRating";

type Properties = {
  game: Game;
  onClose: () => void;
};

export default function GameModalHeader({ game, onClose }: Properties) {
  return (
    <ModalHeaderSection onClose={onClose}>
      {/* Title */}
      <div className="min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">
        <GameTitle game={game} />
      </div>

      {/* Rating */}
      <div className="ml-auto shrink-0">
        <GameRating game={game} barSide="right" />
      </div>
    </ModalHeaderSection>
  );
}
