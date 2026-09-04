import { games } from "@/utils/load_game_utils";

import GameReviewPageInfoSection from "@/pages/GameReview/components/GameReviewPageInfoSection";
import GameReview from "@/components/Game/GameReview";
import PageDivider from "@/components/Page/PageDivider";
import GameTitle from "@/components/Game/GameTitle";
import GameRating from "@/components/Game/GameRating";
import { ArrowLeft } from "lucide-react";

type Properties = {
  slug: string;
};

export default function GameReviewPage({ slug }: Properties) {
  const game = games.find((game) => game.slug === slug);

  if (!game) {
    return null;
  }

  return (
    <>
      <section className="flex flex-col sm:flex-row sm:gap-10 section">
        <div className="flex flex-1 flex-col pt-5 sm:sticky sm:top-(--navbar-height) sm:self-start">
          <GameReviewPageInfoSection game={game} />
        </div>

        <div className="flex flex-2 flex-col">
          <PageDivider theme="dark" padded={false} />
          <GameReview game={game} />
          <PageDivider theme="dark" padded={false} />
        </div>
      </section>
    </>
  );
}
