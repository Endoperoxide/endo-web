import SubHeader, { SubHeaderProperties } from "./components/SubHeader";

type Properties = SubHeaderProperties & {
  url: string;
};

export function EmbedContentContainer({
  title,
  titleBgColor,
  url,
}: Properties) {
  return (
    <div className="flex flex-col">
      <SubHeader title={title} titleBgColor={titleBgColor} />
      <iframe
        className="w-full object-cover"
        src={url}
        title={title}
        allowFullScreen
      />
    </div>
  );
}
