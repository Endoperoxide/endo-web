import type { Dispatch, SetStateAction } from "react";
import PlusDivider from "@/components/PlusDivider";
import ReviewsPageSearchHeader from "./ReviewsPageSearchHeader";
import ReviewsPageSearchFilter from "./ReviewsPageSearchFilter";
import ReviewsPageSearchCarousel from "./ReviewsPageSearchCarousel";
import ReviewsPageSearchTitles from "./ReviewsPageSearchTitles";
import type { SortOrder } from "./SortButton";
import type { RatingTier } from "@/utils/rating_utils";
import type { Game } from "@/utils/game_utils";

type Properties = {
  games: Game[];
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  activeTier: RatingTier;
  setActiveTier: Dispatch<SetStateAction<RatingTier>>;
  sortOrder: SortOrder;
  setSortOrder: Dispatch<SetStateAction<SortOrder>>;
  activeIndex: number;
  onCardSelect: (game: Game) => void;
  onActiveChange: (index: number) => void;
  onOpenList: () => void;
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
  activeIndex,
  onCardSelect,
  onActiveChange,
  onOpenList,
  tiers,
}: Properties) {
  return (
    <section className="flex h-[calc(100svh-var(--navbar-height))] flex-col overflow-hidden">
      <div className="flex flex-1 flex-col">
        <PlusDivider />

        <ReviewsPageSearchHeader
          search={searchQuery}
          setSearch={setSearchQuery}
          onOpenList={onOpenList}
        />

        <ReviewsPageSearchFilter
          tiers={tiers}
          activeTier={activeTier}
          setActiveTier={setActiveTier}
          search={searchQuery}
          setSearch={setSearchQuery}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          onOpenList={onOpenList}
        />

        <ReviewsPageSearchCarousel
          games={games}
          onCardSelect={onCardSelect}
          onActiveChange={onActiveChange}
        />
      </div>

      <ReviewsPageSearchTitles games={games} progress={activeIndex} />
    </section>
  );
}
