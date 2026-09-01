import { games } from "@/utils/load_game_utils";

import GameReviewPageInfoSection from "@/pages/GameReview/components/GameReviewPageInfoSection";
import GameReview from "@/components/Game/GameReview";
import PlusDivider from "@/components/PlusDivider";
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
        <div className="flex flex-col flex-1 pt-5 sm:sticky sm:top-0 sm:self-start">
          <GameReviewPageInfoSection game={game} />
        </div>

        <div className="flex flex-2 flex-col">
          <PlusDivider theme="dark" padded={false} />
          <GameReview game={game} />
          <PlusDivider theme="dark" padded={false} />
        </div>
      </section>
    </>
  );
}
