import { useState } from "react";
import type { Game } from "@/utils/game_utils";
import { RATING_TIERS } from "@/utils/rating_utils";
import { useFilteredGames } from "@/pages/Reviews/hooks/useFilteredGames";
import ReviewsPageTitleSection from "@/pages/Reviews/components/ReviewsPageTitleSection";
import ReviewsPageFilterSection from "./components/ReviewsPageFilterSection";
import ReviewsPageCarouselSection from "./components/ReviewsPageCarouselSection";
import GameModal from "@/components/Modal/GameModal/GameModal";
import ListModal from "@/components/Modal/ListModal/ListModal";
import PageDisplaySection from "@/components/Page/PageDisplaySection";
import fayeStandNoSphere from "@/assets/Faye/faye_stand_no_sphere.png";
import ReviewsPageHeaderSection from "./components/ReviewsPageHeaderSection";
import PageIntroSection from "@/components/Page/PageIntroSection";

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
    sortOrder,
    setSortOrder,
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
    <main>
      <PageDisplaySection displayImage={fayeStandNoSphere} />
      <PageIntroSection title="Reviews" description="test hi hello" />

      <div className="flex flex-col h-[calc(100svh-var(--navbar-height))] overflow-hidden">
        <div className="pt-5 flex flex-1 flex-col content-padding-horizontal">
          <ReviewsPageHeaderSection
            search={searchQuery}
            setSearch={setSearchQuery}
            onOpenList={() => setIsListOpen(true)}
          />

          <ReviewsPageFilterSection
            tiers={RATING_TIERS}
            activeTier={activeTier}
            setActiveTier={setActiveTier}
            search={searchQuery}
            setSearch={setSearchQuery}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            onOpenList={() => setIsListOpen(true)}
          />

          <ReviewsPageCarouselSection
            games={filtered}
            onCardSelect={handleCardSelect}
            onActiveChange={handleActiveChange}
          />
        </div>
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
