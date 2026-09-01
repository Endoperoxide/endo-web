import { useState, type ReactNode } from "react";

const CLOSE_ANIMATION_MS = 250;

type Properties = {
  onClose: () => void;
  children: (handleClose: () => void) => ReactNode;
};

export default function Modal({ onClose, children }: Properties) {
  const [isClosing, setIsClosing] = useState(false);

  function handleClose() {
    if (isClosing) return;
    setIsClosing(true);
    window.setTimeout(onClose, CLOSE_ANIMATION_MS);
  }

  return (
    <div
      onClick={handleClose}
      className={`absolute inset-0 z-100 flex items-center justify-center bg-[rgba(9,7,15,0.75)] ${
        isClosing ? "animate-modal-overlay-out" : "animate-modal-overlay-in"
      }`}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className={`h-full w-full overflow-auto border-0 bg-background-main ${
          isClosing ? "animate-modal-out" : "animate-modal-in"
        }`}
      >
        {children(handleClose)}
      </div>
    </div>
  );
}
