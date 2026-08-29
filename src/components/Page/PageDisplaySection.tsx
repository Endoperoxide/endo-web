import marathonText from "@/assets/Vector/marathon_text.svg";
import { ReactNode } from "react";

type Properties = {
  children: ReactNode;
};

export default function PageDisplaySection({ children }: Properties) {
  return (
    <section className="relative flex flex-col w-full bg-black h-[calc(100svh-var(--navbar-height))]">
      {/* Main Display */}
      <div className="relative flex-1 overflow-hidden">{children}</div>

      {/* Bottom strip */}
      <div className="relative p-3 h-(--navbar-height) w-full overflow-hidden bg-background-highlight flex items-center justify-center">
        <img
          src={marathonText}
          alt=""
          aria-hidden="true"
          className="h-full w-auto max-w-full object-contain invert"
        />
      </div>
    </section>
  );
}
