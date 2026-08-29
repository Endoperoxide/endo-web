type Properties = {
  title: string;
  eyebrow?: string;
};

export default function EyebrowTitle({ eyebrow, title }: Properties) {
  return (
    <div className="py-5">
      {eyebrow && (
        <p className="uppercase text-text-secondary my-1">{eyebrow}</p>
      )}

      {title && <h1 className="text-text-primary">{title.toUpperCase()}</h1>}
    </div>
  );
}
