import { useState } from "react";
import type { Game } from "@/utils/game_utils";
import GameModalContent from "@/components/GameModal/components/GameModalContent";

const CLOSE_ANIMATION_MS = 250;

type Properties = {
  game: Game;
  onClose: () => void;
};

export default function GameModal({ game, onClose }: Properties) {
  const [isClosing, setIsClosing] = useState(false);

  function handleClose() {
    if (isClosing) return;
    setIsClosing(true);
    window.setTimeout(onClose, CLOSE_ANIMATION_MS);
  }

  return (
    // Background blur
    <div
      onClick={handleClose}
      className={`fixed inset-0 z-100 flex items-stretch justify-start bg-[rgba(9,7,15,0.75)] ${
        isClosing
          ? "animate-[gameDescriptionModalOverlayOut_0.25s_ease-in_forwards]"
          : "animate-[gameDescriptionModalOverlayIn_0.25s_ease-out]"
      }`}
    >
      {/* Main content and animation */}
      <div
        onClick={(event) => event.stopPropagation()}
        className={`h-screen w-[min(92vw,640px)] overflow-auto border border-l-0 border-border-base bg-background-main p-0 max-sm:w-screen max-sm:border-r-0 ${
          isClosing
            ? "animate-[gameDescriptionModalPanelOut_0.25s_cubic-bezier(0.4,0,1,1)_forwards]"
            : "animate-[gameDescriptionModalPanelIn_0.35s_cubic-bezier(0.16,1,0.3,1)]"
        }`}
      >
        <GameModalContent game={game} onClose={handleClose} />
      </div>
    </div>
  );
}
