import type { Dispatch, SetStateAction } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

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
      className="flex shrink-0 items-center gap-1.5 whitespace-nowrap text-[0.72rem] sm:text-[0.78rem]"
    >
      <span className="text-text-muted">Sort by:</span>
      <span className="flex items-center gap-1 text-text-accent">
        {sortOrder === "descending" ? (
          <ArrowDown size={13} />
        ) : (
          <ArrowUp size={13} />
        )}
        {sortOrder === "descending" ? "Descending" : "Ascending"}
      </span>
    </button>
  );
}
