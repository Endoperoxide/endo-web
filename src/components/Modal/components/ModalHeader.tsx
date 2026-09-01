import { X } from "lucide-react";
import type { ReactNode } from "react";

type Properties = {
  onClose: () => void;
  children?: ReactNode;
};

export default function ModalHeaderSection({ onClose, children }: Properties) {
  return (
    <section className="p-0 sticky top-0 z-5 border-b border-border-base bg-background-main">
      <div className="flex justify-end">
        {/* Close button */}
        <button
          onClick={onClose}
          className="flex h-6 w-6 cursor-pointer border-l border-b border-border-base justify-center items-center text-text-secondary"
        >
          <X size={15} strokeWidth={2} />
        </button>
      </div>

      {children && (
        <div className="flex items-center gap-2 p-4">{children}</div>
      )}
    </section>
  );
}
