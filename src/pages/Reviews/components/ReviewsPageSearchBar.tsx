import type { Dispatch, SetStateAction } from "react";
import { List } from "lucide-react";
import SearchBar from "./SearchBar";
import FilterDropdown from "./FilterDropdown";
import SortButton, { type SortOrder } from "./SortButton";
import type { RatingTier } from "@/utils/rating_utils";

type Properties = {
  tiers: { label: string; value: RatingTier; range?: string }[];
  activeTier: RatingTier;
  setActiveTier: Dispatch<SetStateAction<RatingTier>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  sortOrder: SortOrder;
  setSortOrder: Dispatch<SetStateAction<SortOrder>>;
  onOpenList: () => void;
};

export default function ReviewsPageSearchBar({
  tiers,
  activeTier,
  setActiveTier,
  search,
  setSearch,
  sortOrder,
  setSortOrder,
  onOpenList,
}: Properties) {
  return (
    <div className="flex w-full flex-col gap-2 py-3">
      <div className="flex w-full items-center border border-border-base bg-background-base">
        <div className="min-w-0 flex-1">
          <SearchBar search={search} setSearch={setSearch} />
        </div>

        <button
          type="button"
          onClick={onOpenList}
          aria-label="Open list view"
          className="flex aspect-square h-full items-center justify-center text-text-primary hover:text-text-accent transition-colors"
        >
          <List size={16} />
        </button>
      </div>

      <div className="flex h-11 items-stretch gap-2">
        <FilterDropdown
          tiers={tiers}
          activeTier={activeTier}
          onChange={setActiveTier}
        />

        <SortButton sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>
    </div>
  );
}
