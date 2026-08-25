import { Page } from "@/utils/page_utils";

type Properties = {
  page: Page;
  label: string;
  active: boolean;
  onClick: () => void;
};

export default function Navlink({ page, label, active, onClick }: Properties) {
  return (
    <button
      key={page}
      onClick={onClick}
      className={`flex h-full cursor-pointer items-center justify-center px-3 font-mono text-[0.85rem] font-medium tracking-widest transition-colors duration-300 ${
        active
          ? "text-text-accent"
          : "text-text-primary hover:text-text-secondary"
      }`}
    >
      {label.toUpperCase()}
    </button>
  );
}
