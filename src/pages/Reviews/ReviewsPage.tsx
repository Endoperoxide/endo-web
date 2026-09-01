import { useState } from "react";
import type { Game } from "@/utils/game_utils";
import { RATING_TIERS } from "@/utils/rating_utils";
import { useFilteredGames } from "@/pages/Reviews/hooks/useFilteredGames";
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
    handleActiveChange,
  } = useFilteredGames();

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
      <ReviewsPageRecentSection />
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
        onActiveChange={handleActiveChange}
        tiers={RATING_TIERS}
      />
    </>
  );
}
