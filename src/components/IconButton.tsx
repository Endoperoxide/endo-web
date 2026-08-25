import type { LucideIcon } from "lucide-react";

type Properties = {
  label: string;
  icon?: LucideIcon;
  onClick: () => void;
};

export default function IconButton({ label, icon: Icon, onClick }: Properties) {
  return (
    <button
      onClick={onClick}
      className="flex cursor-pointer items-center gap-2 border border-border-base bg-background-main px-4 py-3 font-body text-[0.7rem] uppercase tracking-widest text-text-primary transition-colors duration-200 hover:border-border-strong hover:text-text-accent"
    >
      {label}
      {Icon && <Icon size={12} />}
    </button>
  );
}
