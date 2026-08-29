import type { Dispatch, SetStateAction } from "react";
import FilterButtons from "./FilterButtons";
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

export default function ReviewsPageFilterSection({
  tiers,
  activeTier,
  setActiveTier,
  sortOrder,
  setSortOrder,
}: Properties) {
  return (
    <section>
      <div className="min-h-(--navbar-height) py-3">
        {/* Filter row */}
        <div className="flex w-full flex-row items-center justify-between bg-background-base p-3">
          <FilterButtons
            tiers={tiers}
            activeTier={activeTier}
            setActiveTier={setActiveTier}
          />

          <div className="flex">
            <SortButton sortOrder={sortOrder} setSortOrder={setSortOrder} />
          </div>
        </div>
      </div>
    </section>
  );
}
