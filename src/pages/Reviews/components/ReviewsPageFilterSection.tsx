import FilterBar from "@/pages/Reviews/components/FilterBar";
import type { Dispatch, SetStateAction } from "react";
import type { RatingTier } from "@/utils/rating_utils";

type Properties = {
  tiers: { label: string; value: RatingTier; range?: string }[];
  activeTier: RatingTier;
  setActiveTier: Dispatch<SetStateAction<RatingTier>>;
  filtered: any[];
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  onOpenList: () => void;
};

export default function ReviewsPageFilterSection({
  tiers,
  activeTier,
  setActiveTier,
  filtered,
  search,
  setSearch,
  onOpenList,
}: Properties) {
  return (
    <section>
      <div className="flex w-full items-center gap-2 bg-background-main min-h-(--navbar-height)">
        {/* Filter bar */}
        <div className="min-w-0 flex-1">
          <FilterBar
            tiers={tiers}
            activeTier={activeTier}
            setActiveTier={setActiveTier}
            filtered={filtered}
            onFilterChange={() => {}}
            search={search}
            setSearch={setSearch}
          />
        </div>

        {/* Review list trigger */}
        <button
          type="button"
          onClick={onOpenList}
          className="mr-4 shrink-0 whitespace-nowrap border border-border-base px-4 py-2.5 font-body text-[0.72rem] text-primary hover:border-border-hover sm:px-4 sm:text-[0.78rem]"
        >
          List
        </button>
      </div>
    </section>
  );
}
