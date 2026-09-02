import type { Dispatch, SetStateAction } from "react";
import type { RatingTier } from "@/utils/rating_utils";
import SearchBar from "@/pages/Reviews/components/SearchBar";
import FilterDropdown from "@/pages/Reviews/components/FilterDropdown";
import SortButton, {
  type SortOrder,
} from "@/pages/Reviews/components/SortButton";

type Properties = {
  tiers: { label: string; value: RatingTier; range?: string }[];
  activeTier: RatingTier;
  setActiveTier: Dispatch<SetStateAction<RatingTier>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  sortOrder: SortOrder;
  setSortOrder: Dispatch<SetStateAction<SortOrder>>;
};

export default function ReviewsPageSearchBar({
  tiers,
  activeTier,
  setActiveTier,
  search,
  setSearch,
  sortOrder,
  setSortOrder,
}: Properties) {
  return (
    <div className="flex w-full flex-col gap-2 py-3">
      <div className="flex w-full items-center border border-border-base bg-background-base">
        <div className="min-w-0 flex-1">
          <SearchBar search={search} setSearch={setSearch} />
        </div>
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
