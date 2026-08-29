import type { Game } from "@/utils/game_utils";
import GameCoverArt from "@/components/Game/GameCoverArt";
import GameCategoryScore from "@/components/GameCategory/GameCategoryScore";

type Properties = {
  game: Game;
};

export default function GameModalInfo({ game }: Properties) {
  return (
    <div className="flex items-stretch gap-4">
      {/* Cover art */}
      <div className="self-start h-full max-w-1/3 aspect-2/3 shrink-0 md:self-auto md:h-auto md:w-1/4 md:max-w-none md:shrink">
        <GameCoverArt game={game} />
      </div>

      <div className="flex-1 flex flex-col justify-center">
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

        <div className="h-px my-2 bg-border-base" />

        {/* Category scores */}
        <GameCategoryScore categories={game.categories} />
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
