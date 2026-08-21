import type { ReactNode } from "react";
import { useDropdown } from "@/components/Dropdown/hooks/useDropdown";

type Properties = {
  trigger: (props: { isOpen: boolean; toggle: () => void }) => ReactNode;
  children: (close: () => void) => ReactNode;
  align?: "left" | "right" | "stretch";
  fullBleed?: boolean;
  fullBleedTop?: string;
};

export default function Dropdown({
  trigger,
  children,
  align = "stretch",
  fullBleed = false,
  fullBleedTop,
}: Properties) {
  const { isOpen, toggle, close, rootRef } = useDropdown<HTMLDivElement>();

  const positionClasses = fullBleed
    ? "fixed left-0 right-0"
    : {
        left: "absolute top-[calc(100%+4px)] left-0",
        right: "absolute top-[calc(100%+4px)] right-0",
        stretch: "absolute top-[calc(100%+4px)] left-0 right-0",
      }[align];

  return (
    <div ref={rootRef} className="relative">
      {trigger({ isOpen, toggle })}

      {isOpen && (
        <div
          className={`z-100 animate-dropdown-in bg-background-main border border-border-base shadow-resting ${positionClasses}`}
          style={fullBleed ? { top: fullBleedTop ?? 0 } : undefined}
        >
          {children(close)}
        </div>
      )}
    </div>
  );
}
