import IconButton from "@/components/IconButton";
import type { LucideIcon } from "lucide-react";

type Properties = {
  eyebrow: string;
  title: string;
  body: string;
  backgroundImage: string;
  secondaryImage: string;
  side?: "left" | "right";
  button?: {
    label: string;
    onClick: () => void;
    icon?: LucideIcon;
  };
};

export default function DescriptionCard({
  eyebrow,
  title,
  body,
  backgroundImage,
  secondaryImage,
  side = "right",
  button,
}: Properties) {
  const isRight = side === "right";

  return (
    <div
      className={`relative flex w-full flex-col items-stretch min-h-0 md:min-h-[clamp(480px,80vh,760px)] ${
        isRight ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Images */}
      <div className="relative flex-none h-[38vh] min-h-60 overflow-visible md:h-auto md:min-h-0 md:flex-1 md:basis-[55%]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <img
          className="pointer-events-none absolute bottom-0 left-1/2 z-2 h-auto w-[min(55vw,240px)] -translate-x-1/2 select-none object-contain drop-shadow-[0_20px_24px_rgba(0,0,0,0.35)] md:w-[clamp(220px,34vw,420px)]"
          src={secondaryImage}
          alt=""
        />
      </div>

      {/* Text */}
      <div className="flex flex-1 basis-[45%] min-w-0 flex-col items-start justify-center bg-background-main px-5 pt-8 pb-10 text-left md:p-[clamp(2rem,5vw,4rem)]">
        {/* Eyebrow */}
        <div className="mb-3 font-body text-[0.7rem] uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </div>

        {/* Title */}
        <h3 className="mb-5 font-mono text-[clamp(28px,3.5vw,44px)] font-bold uppercase tracking-tight text-primary">
          {title}
        </h3>

        {/* Body */}
        <p className="max-w-[34ch] font-body font-light text-[1rem] leading-[1.7] text-secondary md:max-w-[46ch]">
          {body}
        </p>

        {/* Optional button */}
        {button && (
          <div className="mt-8">
            <IconButton
              label={button.label}
              icon={button.icon}
              onClick={button.onClick}
            />
          </div>
        )}
      </div>
    </div>
  );
}
