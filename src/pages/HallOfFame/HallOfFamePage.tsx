import { useState } from "react";
import type { Game } from "@/utils/game_utils";
import FamePageWIPSection from "./components/FamePageWIPSection";
import ListModal from "@/components/Modal/ListModal/ListModal";
import GameModal from "@/components/Modal/GameModal/GameModal";

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
