import FilterBar from "@/pages/Reviews/components/FilterBar";
import type { Dispatch, SetStateAction } from "react";
import type { RatingTier } from "@/utils/rating_utils";
import { NAVBAR_HEIGHT } from "@/components/Navbar/Navbar";

type Properties = {
  tiers: { label: string; value: RatingTier; range?: string }[];
  activeTier: RatingTier;
  setActiveTier: Dispatch<SetStateAction<RatingTier>>;
  filtered: any[];
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

export default function ReviewsPageFilterSection({
  tiers,
  activeTier,
  setActiveTier,
  filtered,
  search,
  setSearch,
}: Properties) {
  return (
    <section>
      <div
        className="flex w-full shrink-0 items-center justify-between border-b border-border-base bg-background-main py-2"
        style={{ minHeight: NAVBAR_HEIGHT }}
      >
        {/* Filter bar */}
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
    </section>
  );
}
