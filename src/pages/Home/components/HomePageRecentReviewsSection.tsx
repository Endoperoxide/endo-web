import { ArrowRight } from "lucide-react";
import type { Page } from "@/utils/page_utils";
import type { Game } from "@/utils/game_utils";
import EyebrowTitle from "@/components/EyebrowTitle";
import IconButton from "@/components/IconButton";
import RecentReviews from "@/components/RecentReviews/RecentReviews";

type Properties = {
  onSelectGame: (game: Game) => void;
  onNavigate: (page: Page) => void;
};

export default function HomePageRecentReviewsSection({
  onSelectGame,
  onNavigate,
}: Properties) {
  return (
    <section className="relative z-1 flex flex-col bg-background-main">
      {/* Title with button */}
      <div className="flex flex-row items-center justify-between gap-4 pr-6">
        <EyebrowTitle
          title="Recent Reviews"
          eyebrow="Most recent games reviewed"
        />
        <IconButton
          label="All Reviews"
          icon={ArrowRight}
          onClick={() => onNavigate("reviews")}
        />
      </div>

      <div className="flex flex-row items-stretch">
        {/* Recent games */}
        <div className="min-w-0 flex-1">
          <RecentReviews orientation="horizontal" onSelect={onSelectGame} />
        </div>
      </div>
    </section>
  );
}
