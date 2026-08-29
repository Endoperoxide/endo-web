import { Plus } from "lucide-react";

type Corner = "top-left" | "top-right" | "bottom-left" | "bottom-right";

type Properties = {
  corner: Corner;
  color?: string;
};

const cornerClasses: Record<Corner, string> = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
};

export default function CornerPlus({
  color = "text-text-accent",
}: {
  color?: string;
}) {
  return (
    <>
      <PlusIcon corner="top-left" color={color} />
      <PlusIcon corner="top-right" color={color} />
      <PlusIcon corner="bottom-left" color={color} />
      <PlusIcon corner="bottom-right" color={color} />
    </>
  );
}

function PlusIcon({ corner, color = "text-text-accent" }: Properties) {
  return (
    <Plus
      aria-hidden="true"
      className={`pointer-events-none absolute ${cornerClasses[corner]} h-6 w-6 lg:h-7 lg:w-7 z-100 ${color}`}
    />
  );
}
