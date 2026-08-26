import { useState } from "react";
import type { Game } from "@/utils/game_utils";
import { RATING_TIERS } from "@/utils/rating_utils";
import { useFilteredGames } from "@/pages/Reviews/hooks/useFilteredGames";
import ReviewsPageTitleSection from "@/pages/Reviews/components/ReviewsPageTitleSection";
import ReviewsPageFilterSection from "./components/ReviewsPageFilterSection";
import ReviewsPageCarouselSection from "./components/ReviewsPageCarouselSection";
import GameModal from "@/components/Modal/GameModal/GameModal";
import ListModal from "@/components/Modal/ListModal/ListModal";

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
  const [isListOpen, setIsListOpen] = useState(false);

  function handleCardSelect(game: Game) {
    onSelect(game);

    const isActiveCard = filtered.indexOf(game) === activeIndex;

    if (isActiveCard) {
      setModalGame(game);
    }
  }

  return (
    <main className="relative flex h-full overflow-hidden content-padding-horizontal">
      <div className="flex flex-1 flex-col overflow-hidden">
        <ReviewsPageFilterSection
          tiers={RATING_TIERS}
          activeTier={activeTier}
          setActiveTier={setActiveTier}
          filtered={filtered}
          search={searchQuery}
          setSearch={setSearchQuery}
          onOpenList={() => setIsListOpen(true)}
        />

        <ReviewsPageCarouselSection
          games={filtered}
          onCardSelect={handleCardSelect}
          onActiveChange={handleActiveChange}
        />

        <ReviewsPageTitleSection games={filtered} progress={activeIndex} />
      </div>

      {/* Modals */}
      {modalGame && (
        <GameModal game={modalGame} onClose={() => setModalGame(null)} />
      )}
      {isListOpen && <ListModal onClose={() => setIsListOpen(false)} />}
    </main>
  );
}
