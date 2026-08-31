import type { Dispatch, SetStateAction } from "react";
import { ArrowUp } from "lucide-react";

export type SortOrder = "descending" | "ascending";

type Properties = {
  sortOrder: SortOrder;
  setSortOrder: Dispatch<SetStateAction<SortOrder>>;
};

export default function SortButton({ sortOrder, setSortOrder }: Properties) {
  function toggle() {
    setSortOrder((current) =>
      current === "descending" ? "ascending" : "descending",
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        sortOrder === "descending"
          ? "Sort by lowest rating"
          : "Sort by highest rating"
      }
      className="flex h-full shrink-0 items-center gap-1.5 whitespace-nowrap border border-border-base px-3 text-[0.75rem] text-text-primary hover:border-strong"
    >
      <ArrowUp
        size={16}
        className={`shrink-0 transition-transform duration-200 ${
          sortOrder === "descending" ? "rotate-180" : "rotate-0"
        }`}
      />
      {sortOrder === "descending" ? "Descending" : "Ascending"}
    </button>
  );
}
