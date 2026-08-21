import { useState } from "react";
import type { Game } from "@/utils/game_utils";
import GameModal from "@/components/GameModal/GameModal";
import FamePageWIPSection from "./components/FamePageWIPSection";

type Properties = {
  onSelect: (game: Game | null) => void;
};

export default function HallOfFamePage({ onSelect }: Properties) {
  const [modalGame, setModalGame] = useState<Game | null>(null);

  return (
    <main className="flex h-full flex-col overflow-hidden">
      <FamePageWIPSection />

      {modalGame && (
        <GameModal game={modalGame} onClose={() => setModalGame(null)} />
      )}
    </main>
  );
}
