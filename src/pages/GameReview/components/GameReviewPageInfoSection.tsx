import type { Game } from "@/utils/game_utils";
import { getGameDisplay } from "@/utils/game_display_utils";
import GameCoverArt from "@/components/Game/GameCoverArt";
import GameCategoryScore from "@/components/Game/GameCategory/GameCategoryScore";
import GameRating from "@/components/Game/GameRating";
import GameTitle from "@/components/Game/GameTitle";
import { ArrowLeft } from "lucide-react";
import { PAGES } from "@/utils/page_utils";

type Properties = {
  game: Game;
};

export default function GameReviewPageInfoSection({ game }: Properties) {
  const { reviewDateText, playtimeText } = getGameDisplay(game);

  return (
    <div className="flex flex-col gap-4 w-full h-full min-h-0">
      {/* Header */}
      <div className="flex flex-row items-center gap-2 shrink-0">
        <a
          href={`${PAGES.reviews.path}`}
          onClick={(e) => {
            e.preventDefault();
            if (window.history.length > 1 && document.referrer) {
              window.history.back();
            } else {
              window.location.href = PAGES.reviews.path;
            }
          }}
          className="inline-flex size-9 shrink-0 items-center justify-center text-text-accent"
        >
          <ArrowLeft />
        </a>
        <GameTitle game={game} />
        <GameRating game={game} barSide="right" />
      </div>

      {/* Cover art */}
      <div className="min-h-0 flex-1 overflow-hidden">
        <GameCoverArt game={game} />
      </div>

      {/* Scores + meta */}
      <div className="shrink-0 flex flex-col">
        <GameCategoryScore game={game} />
        <div className="h-px my-2 bg-border-base" />
        <div className="flex justify-end gap-5">
          <GameModalMetaStat label="Date of review" value={reviewDateText} />
          <GameModalMetaStat label="Estimated Playtime" value={playtimeText} />
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
      <h1 className="text-[0.6rem] text-text-muted tracking-widest uppercase">
        {label}
      </h1>
      <p className="text-[0.7rem] text-text-primary font-medium">{value}</p>
    </div>
  );
}
