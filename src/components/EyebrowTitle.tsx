type Properties = {
  title: string;
  eyebrow?: string;
  eyebrowColor?: string;
};

export default function EyebrowTitle({
  eyebrow,
  title,
  eyebrowColor = "text-text-secondary",
}: Properties) {
  return (
    <div className="mb-5">
      {eyebrow && (
        <p className={`uppercase ${eyebrowColor}`}>{`>> ${eyebrow}`}</p>
      )}

      {title && <h1 className="text-text-primary">{title.toUpperCase()}</h1>}
    </div>
  );
}
