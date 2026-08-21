import type { ReactNode } from "react";

type Properties = {
  eyebrow?: string;
  title?: string;
  right?: ReactNode;
};

export default function SectionTitle({ eyebrow, title, right }: Properties) {
  return (
    <div className="flex items-end justify-between bg-background-main px-[clamp(1.25rem,5vw,2.5rem)] pt-8 pb-6">
      <div>
        {/* Eyebrow text */}
        {eyebrow && (
          <div
            className={`font-body text-[0.6rem] uppercase tracking-[0.3em] text-accent ${
              title ? "mb-2" : "mb-0"
            }`}
          >
            {eyebrow}
          </div>
        )}

        {/* Title */}
        {title && (
          <h2 className="m-0 font-body text-[clamp(28px,8vw,30px)] font-medium leading-[0.95] tracking-[0.01em] text-primary">
            {title.toUpperCase()}
          </h2>
        )}
      </div>

      {/* Optional component */}
      {right && <div>{right}</div>}
    </div>
  );
}
