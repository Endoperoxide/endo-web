import { PAGES, type Page } from "@/utils/page_utils";

type Properties = {
  page: Page;
  label: string;
  active: boolean;
  onClick?: () => void;
};

export default function Navlink({ page, label, active, onClick }: Properties) {
  return (
    <a
      href={PAGES[page].path}
      onClick={onClick}
      className={`font-display flex items-center justify-center p-0.5 text-[0.85rem] tracking-wide ${
        active
          ? "text-text-dark bg-background-highlight"
          : "text-text-primary hover:text-text-dark hover:bg-background-highlight"
      }`}
    >
      {`[ ${label.toUpperCase()} ]`}
    </a>
  );
}
