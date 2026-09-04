import type { Dispatch, SetStateAction } from "react";
import type { SortOrder } from "@/pages/Reviews/components/SortButton";
import type { RatingTier } from "@/utils/rating_utils";
import type { Game } from "@/utils/game_utils";
import PageContentSection from "@/components/Page/PageContentSection";
import ReviewsPageSearchBar from "@/pages/Reviews/components/ReviewsPageSearchBar";
import GameEntryList from "@/components/Game/GameEntryList/GameEntryList";

type Properties = {
  games: Game[];
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  activeTier: RatingTier;
  setActiveTier: Dispatch<SetStateAction<RatingTier>>;
  sortOrder: SortOrder;
  setSortOrder: Dispatch<SetStateAction<SortOrder>>;
  tiers: { label: string; value: RatingTier; range?: string }[];
};

export default function ReviewsPageSearchSection({
  games,
  searchQuery,
  setSearchQuery,
  activeTier,
  setActiveTier,
  sortOrder,
  setSortOrder,
  tiers,
}: Properties) {
  return (
    <PageContentSection
      theme="dark"
      title="All Reviews"
      eyebrow="Repository of all reviews"
      className="pt-5"
    >
      <div className="flex flex-col">
        {/* Search bar */}
        <div className="flex">
          <ReviewsPageSearchBar
            tiers={tiers}
            activeTier={activeTier}
            setActiveTier={setActiveTier}
            search={searchQuery}
            setSearch={setSearchQuery}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />
        </div>

        {/* Decorative divider */}
        <div className="border border-b-0 border-border-highlight mb-5 h-5 rounded-t-md" />

        {/* Game entry list */}
        <GameEntryList games={games} />
      </div>
    </PageContentSection>
  );
}
