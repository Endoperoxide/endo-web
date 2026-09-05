import marathonText from "@/assets/Vector/marathon_text.svg";
import pattern from "@/assets/Vector/pattern.svg";
import { ReactNode } from "react";

type Properties = {
  children: ReactNode;
};

export default function PageDisplaySection({ children }: Properties) {
  return (
    <section className="p-0 relative flex flex-col w-full h-[calc(100svh-var(--navbar-height))]">
      {/* Main Display */}
      <div className="relative flex-1 overflow-hidden">{children}</div>

      {/* Bottom strip */}
      <section className="relative py-3 h-(--navbar-height) w-full overflow-hidden bg-background-highlight flex items-center justify-center md:justify-between">
        <img
          src={pattern}
          alt=""
          aria-hidden="true"
          className="hidden md:block h-full w-auto max-w-full object-contain"
        />
        <img
          src={marathonText}
          alt=""
          aria-hidden="true"
          className="h-full w-auto max-w-full object-contain invert"
        />
        <img
          src={pattern}
          alt=""
          aria-hidden="true"
          className="hidden md:block h-full w-auto max-w-full object-contain"
        />
      </section>
    </section>
  );
}
