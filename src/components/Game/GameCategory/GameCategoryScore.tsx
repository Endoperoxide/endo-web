import type { Game } from "@/utils/game_utils";
import { CATEGORY_LABELS, isReviewed } from "@/utils/game_utils";
import GameCategoryScoreRow from "@/components/Game/GameCategory/components/GameCategoryScoreRow";

type Properties = {
  game: Game;
};

export default function GameCategoryScore({ game }: Properties) {
  if (!isReviewed(game)) return null;

  const entries = Object.entries(game.categories) as [
    keyof typeof game.categories,
    number,
  ][];

  return (
    <div className="grid grid-cols-1 gap-3">
      {/* List of all categories */}
      {entries.map(([key, val]) => (
        <GameCategoryScoreRow
          key={key}
          label={CATEGORY_LABELS[key]}
          value={val}
        />
      ))}
    </div>
  );
}
