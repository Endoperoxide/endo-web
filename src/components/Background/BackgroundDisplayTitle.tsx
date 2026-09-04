import decorativeHeader from "@/assets/Vector/decorative_header.svg";
import decorativeFooter from "@/assets/Vector/decorative_footer.svg";

type Properties = {
  title: string;
};

export default function BackgroundDisplayTitle({ title }: Properties) {
  return (
    <div className="relative z-10 flex flex-col items-center gap-2 sm:mt-10 mix-blend-exclusion p-2">
      <img src={decorativeHeader} className="mx-auto" />
      <h1 className="text-text-primary sm:text-7xl text-center h-auto">
        {title.toUpperCase()}
      </h1>
      <img src={decorativeFooter} className="mx-auto" />
    </div>
  );
}
