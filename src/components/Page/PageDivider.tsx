import { Plus } from "lucide-react";

type Properties = {
  theme: "light" | "dark";
  padded?: boolean;
};

const themeStyles = {
  dark: {
    background: "bg-background-main",
    color: "text-text-accent",
  },
  light: {
    background: "bg-background-highlight",
    color: "text-text-primary",
  },
} as const;

export default function PageDivider({
  theme = "dark",
  padded = true,
}: Properties) {
  const { background, color } = themeStyles[theme];

  return (
    <div
      aria-hidden="true"
      className={`flex items-center justify-between py-3 sm:py-5 ${background} ${
        padded ? "px-4 md:px-15" : "p-0"
      }`}
    >
      <Plus className={`h-7 w-7 ${color}`} />
      <Plus className={`h-7 w-7 ${color}`} />
    </div>
  );
}
