import GameCard from "@/components/GameCard/GameCard";
import PageContentSection from "@/components/Page/PageContentSection";
import { recentGames } from "@/utils/load_game_utils";

type Properties = {
  onCardSelect: (index: number) => void;
};

export default function ReviewsPageRecentSection({ onCardSelect }: Properties) {
  return (
    <PageContentSection
      theme="light"
      title="Recent Games"
      eyebrow="Recently reviewed games"
    >
      <div className="grid w-full grid-cols-3 gap-2">
        {recentGames.map((game, index) => (
          <GameCard
            key={game.slug}
            game={game}
            onClick={() => onCardSelect(index)}
          />
        ))}
      </div>
    </PageContentSection>
  );
}
