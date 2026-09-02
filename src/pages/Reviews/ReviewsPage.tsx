import { useState } from "react";
import type { Game } from "@/utils/game_utils";
import { RATING_TIERS } from "@/utils/rating_utils";
import { useFilteredGames } from "@/pages/Reviews/hooks/useFilteredGames";
import ReviewsPageDisplaySection from "@/pages/Reviews/components/ReviewsPageDisplaySection";
import ReviewsPageIntroSection from "@/pages/Reviews/components/ReviewsPageIntroSection";
import ReviewsPagePodiumSection from "@/pages/Reviews/components/ReviewsPagePodiumSection";
import ReviewsPageSearchSection from "@/pages/Reviews/components/ReviewsPageSearchSection";
import ReviewsPageRecentSection from "@/pages/Reviews/components/ReviewsPageRecentSection";
import PageDivider from "@/components/Page/PageDivider";

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
      <PageDivider theme="light" />
      <ReviewsPageIntroSection />
      <PageDivider theme="light" />
      <PageDivider theme="dark" />
      <ReviewsPagePodiumSection />
      <PageDivider theme="dark" />
      <PageDivider theme="light" />
      <ReviewsPageRecentSection />
      <PageDivider theme="light" />
      <PageDivider theme="dark" />
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
