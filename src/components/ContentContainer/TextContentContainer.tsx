import SubHeader, { SubHeaderProperties } from "./components/SubHeader";

type Properties = SubHeaderProperties & {
  paragraphs: string[];
};

export default function TextContentContainer({
  title,
  titleBgColor,
  paragraphs,
}: Properties) {
  return (
    <div className="flex flex-col">
      <SubHeader title={title} titleBgColor={titleBgColor} />
      <div className="flex flex-col gap-4 p-2">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="w-full max-w-none text-[1rem] leading-6 text-text-primary"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
