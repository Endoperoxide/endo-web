import { games } from "@/utils/load_game_utils";
import GameModalHeader from "@/components/Modal/GameModal/components/GameModalHeader";
import GameModalInfo from "@/components/Modal/GameModal/components/GameModalInfo";
import GameModalReview from "@/components/Modal/GameModal/components/GameModalReview";
import PlusDivider from "@/components/PlusDivider";

type Properties = {
  slug: string;
};

export default function GameReviewPage({ slug }: Properties) {
  const game = games.find((g) => g.slug === slug);

  if (!game) return null;

  return (
    <>
      <GameModalHeader game={game} onClose={() => {}} />
      <section className="flex flex-col sm:flex-row sm:gap-10 section">
        <div className="flex flex-1 sm:sticky sm:top-0 sm:self-start pt-5">
          <GameModalInfo game={game} />
        </div>
        <div className="flex flex-col flex-2">
          <PlusDivider theme="dark" padded={false} />
          <GameModalReview game={game} />
          <PlusDivider theme="dark" padded={false} />
        </div>
      </section>
    </>
  );
}
