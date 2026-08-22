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
      className={`fixed inset-0 z-100 flex items-stretch justify-start bg-[rgba(9,7,15,0.75)] ${
        isClosing ? "animate-modal-overlay-out" : "animate-modal-overlay-in"
      }`}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className={`h-screen w-[min(92vw,640px)] overflow-auto border border-l-0 border-border-base bg-background-main p-0 max-sm:w-screen max-sm:border-r-0 ${
          isClosing ? "animate-modal-out" : "animate-modal-in"
        }`}
      >
        {children(handleClose)}
      </div>
    </div>
  );
}
