import { Plus } from "lucide-react";

type Properties = {
  color?: string;
};

export default function PlusDivider({
  color = "text-text-accent",
}: Properties) {
  return (
    <div aria-hidden="true" className="flex items-center justify-between py-5">
      <Plus className={`h-7 w-7 ${color}`} />
      <Plus className={`h-7 w-7 ${color}`} />
    </div>
  );
}
