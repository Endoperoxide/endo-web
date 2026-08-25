type Properties = {
  title: string;
  eyebrow?: string;
};

export default function EyebrowTitle({ eyebrow, title }: Properties) {
  return (
    <div className="py-5">
      {eyebrow && (
        <div
          className={`font-body text-[0.65rem] uppercase tracking-[0.3em] text-accent mb-1`}
        >
          {eyebrow}
        </div>
      )}

      {title && (
        <h2 className="m-0 font-body text-[clamp(28px,8vw,25px)] font-medium leading-none tracking-tight text-text-primary">
          {title.toUpperCase()}
        </h2>
      )}
    </div>
  );
}
