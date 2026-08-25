import Modal from "@/components/Modal/Modal";
import ModalHeader from "@/components/Modal/components/ModalHeader";
import { getUpcomingStatuses } from "@/utils/upcoming_games_utils";
import ListModalHeader from "./components/ListModalHeader";

type Properties = {
  onClose: () => void;
};

export default function ListModal({ onClose }: Properties) {
  const games = getUpcomingStatuses();

  return (
    <Modal onClose={onClose}>
      {(handleClose) => (
        <>
          <ListModalHeader
            handleClose={handleClose}
            reviewedCount={games.filter((g) => g.reviewed).length}
            totalCount={games.length}
          />
          <div className="p-5">
            <ul className="flex flex-col divide-y divide-border-base">
              {games.map((game) => (
                <li
                  key={game.title}
                  className="flex items-center justify-between py-2.5"
                >
                  <span
                    className={
                      game.reviewed ? "text-rating-green" : "text-text-muted"
                    }
                  >
                    {game.title}
                  </span>

                  <span
                    className={`h-2.5 w-2.5 shrink-0 rounded-full ${
                      game.reviewed
                        ? "bg-rating-green"
                        : "border border-border-base bg-transparent"
                    }`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </Modal>
  );
}
