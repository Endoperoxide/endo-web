import type { ReactNode } from "react";

type Properties = {
  eyebrow?: string;
  title?: string;
  right?: ReactNode;
  paddingX?: string;
};

export default function EyebrowTitle({
  eyebrow,
  title,
  right,
  paddingX = "px-[clamp(1.25rem,5vw,2.5rem)]",
}: Properties) {
  return (
    <div
      className={`flex items-end justify-between bg-background-main py-5 ${paddingX}`}
    >
      <div>
        {/* Eyebrow text */}
        {eyebrow && (
          <div
            className={`font-body text-[0.65rem] uppercase tracking-[0.3em] text-accent ${
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
