import type { Game } from "@/utils/game_utils";
import GameCoverArt from "@/components/Game/GameCoverArt";
import GameCategoryScore from "@/components/Game/GameCategory/GameCategoryScore";

type Properties = {
  game: Game;
};

export default function GameModalInfo({ game }: Properties) {
  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Cover art */}
      <GameCoverArt game={game} />

      <div className="flex-1 flex flex-col">
        {/* Category scores */}
        <GameCategoryScore game={game} />

        <div className="h-px my-2 bg-border-base" />

        {/* Meta container */}
        <div className="flex justify-end gap-5">
          {/* Date of review */}
          <GameModalMetaStat
            label="Date of review"
            value={String(game.reviewDate)}
          />
          {/* Playtime */}
          <GameModalMetaStat
            label="Estimated Playtime"
            value={`~${game.playtimeHours}h`}
          />
        </div>
      </div>
    </div>
  );
}

type MetaStatProperties = {
  label: string;
  value: string;
};

function GameModalMetaStat({ label, value }: MetaStatProperties) {
  return (
    <div className="text-right">
      {/* Meta label */}
      <h1 className="text-[0.55rem] text-text-muted tracking-widest uppercase">
        {label}
      </h1>

      {/* Meta value */}
      <p className="text-[0.7rem] text-text-primary font-medium">{value}</p>
    </div>
  );
}
