import type { Game } from "@/utils/game_utils";
import { CATEGORY_LABELS } from "@/utils/game_utils";
import GameCategoryScoreRow from "@/components/GameCategory/components/GameCategoryScoreRow";

type Properties = {
  categories: Game["categories"];
};

export default function GameCategoryScore({ categories }: Properties) {
  const entries = Object.entries(categories) as [
    keyof typeof categories,
    number,
  ][];

  return (
    <div className="grid grid-cols-1 gap-y-1">
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
