import { useState } from "react";
import type { Game } from "@/utils/game_utils";
import { RATING_TIERS } from "@/utils/rating_utils";
import { useFilteredGames } from "@/pages/Reviews/hooks/useFilteredGames";
import GameModal from "@/components/Modal/GameModal/GameModal";
import ListModal from "@/components/Modal/ListModal/ListModal";
import ReviewsPageDisplaySection from "./components/ReviewsPageDisplaySection";
import ReviewsPageIntroSection from "./components/ReviewsPageIntroSection";
import ReviewsPagePodiumSection from "./components/ReviewsPagePodiumSection";
import ReviewsPageSearchSection from "./components/ReviewsPageSearchSection";
import ReviewsPageRecentSection from "./components/ReviewsPageRecentSection";
import PlusDivider from "@/components/PlusDivider";

export default function ReviewsPage() {
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
  } = useFilteredGames();

  const [modalGame, setModalGame] = useState<Game | null>(null);
  const [isListOpen, setIsListOpen] = useState(false);

  function handleCardSelect(game: Game) {
    const isActiveCard = filtered.indexOf(game) === activeIndex;

    if (isActiveCard) {
      setModalGame(game);
    }
  }

  return (
    <>
      <ReviewsPageDisplaySection />
      <PlusDivider theme="light" />
      <ReviewsPageIntroSection />
      <PlusDivider theme="light" />
      <PlusDivider theme="dark" />
      <ReviewsPagePodiumSection />
      <PlusDivider theme="dark" />
      <PlusDivider theme="light" />
      <ReviewsPageRecentSection
        onCardSelect={(index) => {
          const game = filtered[index];
          if (game) setModalGame(game);
        }}
      />
      <PlusDivider theme="light" />
      <PlusDivider theme="dark" />
      <ReviewsPageSearchSection
        games={filtered}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeTier={activeTier}
        setActiveTier={setActiveTier}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        activeIndex={activeIndex}
        onCardSelect={handleCardSelect}
        onActiveChange={handleActiveChange}
        onOpenList={() => setIsListOpen(true)}
        tiers={RATING_TIERS}
      />

      {/* Modals */}
      {modalGame && (
        <GameModal game={modalGame} onClose={() => setModalGame(null)} />
      )}
      {isListOpen && <ListModal onClose={() => setIsListOpen(false)} />}
    </>
  );
}
