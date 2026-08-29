import EyebrowTitle from "../../../components/EyebrowTitle";

type Properties = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  backgroundImage: string;
  secondaryImage: string;
  side?: "left" | "right";
};

export default function DescriptionCard({
  eyebrow,
  title,
  paragraphs,
  backgroundImage,
  secondaryImage,
  side = "right",
}: Properties) {
  const isRight = side === "right";

  return (
    <div
      className={`relative flex min-h-0 w-full flex-col items-stretch md:min-h-[clamp(480px,80vh,760px)] ${
        isRight ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Images */}
      <div className="relative h-[38vh] min-h-60 flex-none overflow-visible md:h-auto md:min-h-0 md:flex-1 md:basis-[55%]">
        <img
          src={backgroundImage}
          alt="Background"
          fetchPriority="low"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <img
          fetchPriority="low"
          className="pointer-events-none absolute bottom-0 left-1/2 z-2 h-auto w-[min(55vw,240px)] -translate-x-1/2 select-none object-contain drop-shadow-[0_20px_24px_rgba(0,0,0,0.35)] md:w-[clamp(220px,34vw,420px)]"
          src={secondaryImage}
          alt="Secondary Image"
        />
      </div>

      {/* Text */}
      <div className="flex min-w-0 flex-1 basis-[45%] flex-col items-start justify-center bg-background-main pt-8 pb-10 text-left md:p-[clamp(2rem,5vw,4rem)]">
        <EyebrowTitle title={title} eyebrow={eyebrow} />

        <div className="flex flex-col gap-4">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="w-full max-w-none text-[1rem] leading-relaxed text-text-secondary md:max-w-[46ch]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
