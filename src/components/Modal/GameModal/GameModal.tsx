import type { Game } from "@/utils/game_utils";
import Modal from "@/components/Modal/Modal";
import GameModalHeader from "./components/GameModalHeader";
import GameModalInfo from "./components/GameModalInfo";
import GameModalReview from "./components/GameModalReview";

type Properties = {
  game: Game;
  onClose: () => void;
};

export default function GameModal({ game, onClose }: Properties) {
  return (
    <Modal onClose={onClose}>
      {(handleClose) => (
        <>
          <GameModalHeader game={game} onClose={handleClose} />
          <div className="px-7 py-5">
            <GameModalInfo game={game} />
            <GameModalReview game={game} />
          </div>
        </>
      )}
    </Modal>
  );
}
