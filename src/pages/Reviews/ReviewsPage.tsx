import { useState } from "react";
import type { Game } from "@/utils/game_utils";
import { RATING_TIERS } from "@/utils/rating_utils";
import { useFilteredGames } from "@/pages/Reviews/hooks/useFilteredGames";
import ReviewsPageTitleSection from "@/pages/Reviews/components/ReviewsPageTitleSection";
import ReviewsPageFilterSection from "./components/ReviewsPageFilterSection";
import ReviewsPageCarouselSection from "./components/ReviewsPageCarouselSection";
import GameModal from "@/components/GameModal/GameModal";

type Properties = {
  onSelect: (game: Game | null) => void;
};

export default function ReviewsPage({ onSelect }: Properties) {
  const {
    filtered,
    activeTier,
    setActiveTier,
    searchQuery,
    setSearchQuery,
    activeIndex,
    handleActiveChange,
  } = useFilteredGames(onSelect);

  const [modalGame, setModalGame] = useState<Game | null>(null);

  function handleCardSelect(game: Game) {
    onSelect(game);

    const isActiveCard = filtered.indexOf(game) === activeIndex;

    if (isActiveCard) {
      setModalGame(game);
    }
  }

  return (
    <main className="relative flex h-full overflow-hidden px-4 md:px-15">
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <ReviewsPageFilterSection
          tiers={RATING_TIERS}
          activeTier={activeTier}
          setActiveTier={setActiveTier}
          filtered={filtered}
          search={searchQuery}
          setSearch={setSearchQuery}
        />

        <ReviewsPageCarouselSection
          games={filtered}
          onCardSelect={handleCardSelect}
          onActiveChange={handleActiveChange}
        />

        <ReviewsPageTitleSection games={filtered} progress={activeIndex} />
      </div>

      {modalGame && (
        <GameModal game={modalGame} onClose={() => setModalGame(null)} />
      )}
    </main>
  );
}
