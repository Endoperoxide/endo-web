import type { Game } from "@/utils/game_utils";
import Modal from "@/components/Modal/Modal";
import GameModalHeader from "./components/GameModalHeader";
import GameModalInfo from "./components/GameModalInfo";
import GameModalReview from "./components/GameModalReview";
import PlusDivider from "@/components/PlusDivider";

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
          <section className="flex flex-col sm:flex-row sm:gap-10 section">
            <div className="flex flex-1 sm:sticky sm:top-0 sm:self-start pt-5">
              <GameModalInfo game={game} />
            </div>
            <div className="flex flex-col flex-2">
              <PlusDivider theme="dark" padded={false} />
              <GameModalReview game={game} />
              <PlusDivider theme="dark" padded={false} />
            </div>
          </section>
        </>
      )}
    </Modal>
  );
}
