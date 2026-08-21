import { ArrowRight } from "lucide-react";
import type { Page } from "@/utils/page_utils";
import type { Game } from "@/utils/game_utils";
import SectionTitle from "@/pages/Home/components/SectionTitle";
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
      <SectionTitle
        title="Recent Reviews"
        right={
          <IconButton
            label="All Reviews"
            icon={ArrowRight}
            onClick={() => onNavigate("reviews")}
          />
        }
      />

      <div className="flex flex-row items-stretch">
        <div className="z-2 flex w-12 shrink-0 items-center justify-center bg-background-bright">
          <span
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
            className="py-2.5 font-body text-[1.75rem] font-medium tracking-widest text-primary"
          >
            RECENT REVIEWS
          </span>
        </div>

        {/* Recemt games */}
        <div className="min-w-0 flex-1">
          <RecentReviews orientation="horizontal" onSelect={onSelectGame} />
        </div>
      </div>
    </section>
  );
}
