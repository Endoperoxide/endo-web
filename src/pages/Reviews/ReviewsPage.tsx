import { RATING_TIERS } from "@/utils/rating_utils";
import { useFilteredGames } from "@/pages/Reviews/hooks/useFilteredGames";
import ReviewsPageDisplaySection from "@/pages/Reviews/components/ReviewsPageDisplaySection";
import ReviewsPageIntroSection from "@/pages/Reviews/components/ReviewsPageIntroSection";
import ReviewsPageSearchSection from "@/pages/Reviews/components/ReviewsPageSearchSection";
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
  } = useFilteredGames();

  return (
    <>
      <ReviewsPageDisplaySection />
      <PageDivider theme="light" />
      <ReviewsPageIntroSection />
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
        tiers={RATING_TIERS}
      />
      <PageDivider theme="dark" />
    </>
  );
}
