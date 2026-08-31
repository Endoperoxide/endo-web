import { Plus } from "lucide-react";

export type SubHeaderProperties = {
  title: string;
  titleBgColor?: string;
};

export default function SubHeader({
  title,
  titleBgColor = "bg-background-main",
}: SubHeaderProperties) {
  return (
    <div className="flex h-6 w-full items-center bg-white">
      <h1
        className={`flex h-full items-center px-5 text-sm uppercase tracking-wide text-text-primary ${titleBgColor}`}
      >
        {title}
      </h1>

      <div className="ml-auto flex aspect-square h-full items-center justify-center bg-white-secondary">
        <Plus size={16} className="text-text-dark" />
      </div>
    </div>
  );
}
