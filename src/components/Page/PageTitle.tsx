type Properties = {
  title: string;
  eyebrow: string;
  eyebrowColor?: string;
};

export default function PageTitle({
  eyebrow,
  title,
  eyebrowColor = "text-text-secondary",
}: Properties) {
  return (
    <header>
      <p className={`uppercase ${eyebrowColor}`}> {`>> ${eyebrow}`} </p>
      <h1 className="text-text-primary"> {title.toUpperCase()} </h1>
    </header>
  );
}
