import SubHeader, {
  SubHeaderProperties,
} from "@/components/ContentContainer/components/SubHeader";

type Properties = SubHeaderProperties & {
  image: string;
  alt?: string;
};

export function ImageContentContainer({
  title,
  titleBgColor,
  image,
  alt,
}: Properties) {
  return (
    <div className="flex flex-col">
      <SubHeader title={title} titleBgColor={titleBgColor} />
      <img className="w-full object-cover" src={image} alt={alt} />
    </div>
  );
}
