import type { Game } from "@/utils/game_utils";
import GameModalMetaStat from "./GameModalMetaStat";
import GameCategoryScore from "@/components/GameCategory/GameCategoryScore";

type Properties = {
  game: Game;
};

export default function GameModalMeta({ game }: Properties) {
  return (
    <div>
      <div className="flex justify-end gap-5">
        <GameModalMetaStat
          label="Date of review"
          value={String(game.reviewDate)}
        />
        <GameModalMetaStat
          label="Estimated Playtime"
          value={`~${game.playtimeHours}h`}
        />
      </div>

      <div className="h-px my-2 bg-border-base" />

      <GameCategoryScore categories={game.categories} />
    </div>
  );
}
