import GameCard from "@/components/Game/GameCard";
import PageContentSection from "@/components/Page/PageContentSection";
import { Game } from "@/utils/game_utils";
import { recentGames } from "@/utils/load_game_utils";

type Properties = {
  onCardSelect: (game: Game) => void;
};

export default function ReviewsPageRecentSection({ onCardSelect }: Properties) {
  return (
    <PageContentSection
      theme="light"
      title="Recent Games"
      eyebrow="Recently reviewed games"
    >
      <div className="grid w-full grid-cols-1 gap-2 bg-background-main p-2 sm:grid-cols-3">
        {recentGames.map((game) => (
          <GameCard
            key={game.slug}
            game={game}
            onClick={() => onCardSelect(game)}
          />
        ))}
      </div>
    </PageContentSection>
  );
}
