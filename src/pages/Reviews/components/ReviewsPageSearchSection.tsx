import type { Dispatch, SetStateAction } from "react";
import ReviewsPageSearchCarousel from "./ReviewsPageSearchCarousel";
import type { SortOrder } from "./SortButton";
import type { RatingTier } from "@/utils/rating_utils";
import type { Game } from "@/utils/game_utils";
import PageContentSection from "@/components/Page/PageContentSection";
import ReviewsPageSearchBar from "./ReviewsPageSearchBar";

type Properties = {
  games: Game[];
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  activeTier: RatingTier;
  setActiveTier: Dispatch<SetStateAction<RatingTier>>;
  sortOrder: SortOrder;
  setSortOrder: Dispatch<SetStateAction<SortOrder>>;
  onActiveChange: (index: number) => void;
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
  onActiveChange,
  tiers,
}: Properties) {
  return (
    <PageContentSection
      theme="dark"
      title="All Reviews"
      eyebrow="Repository of all reviews"
      className="h-[calc(100svh-var(--navbar-height))] pt-5"
    >
      <div className="flex h-full min-h-0 flex-col overflow-hidden">
        <div className="flex min-h-0 flex-1 flex-col">
          <ReviewsPageSearchBar
            tiers={tiers}
            activeTier={activeTier}
            setActiveTier={setActiveTier}
            search={searchQuery}
            setSearch={setSearchQuery}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />

          <ReviewsPageSearchCarousel
            games={games}
            onActiveChange={onActiveChange}
          />
        </div>
      </div>
    </PageContentSection>
  );
}
