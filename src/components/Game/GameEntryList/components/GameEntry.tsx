import type { Game } from "@/utils/game_utils";
import GameCoverArt from "@/components/Game/GameCoverArt";
import { PAGES } from "@/utils/page_utils";
import GameRating from "../../GameRating";
import GameTitle from "../../GameTitle";
import { QrCode } from "lucide-react";
import marathonData from "@/assets/marathon_data.png";
import BackgroundStripes from "@/components/Background/BackgroundStripes";
import PageDivider from "@/components/Page/PageDivider";
import { getGameDisplay } from "@/utils/game_display_utils";

type Properties = {
  game: Game;
};

export default function GameEntry({ game }: Properties) {
  const { ratingLabel } = getGameDisplay(game);

  return (
    <div className="flex flex-row">
      <a
        href={`${PAGES.reviews.path}${game.slug}/`}
        className="group transition-colors block w-full cursor-pointer border border-border-base hover:border-border-highlight"
      >
        <div className="flex flex-row items-stretch">
          <div className="w-40 sm:w-50 p-3 border-r border-border-base transition-colors group-hover:border-border-highlight">
            <GameCoverArt game={game} />
          </div>

          <div className="relative flex flex-1 flex-col min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-2 p-3">
              <GameTitle game={game} />
              <div className="self-end sm:self-auto">
                <GameRating game={game} barSide="right" />
              </div>
            </div>
            <div className="mt-auto text-border-base transition-colors group-hover:text-background-highlight">
              <BackgroundStripes height="2rem" />
            </div>
          </div>
        </div>
      </a>
      <div className="flex flex-col items-center gap-2 pl-3 text-text-primary">
        <QrCode size={24} />
        <span className="font-barcode text-2xl whitespace-nowrap [writing-mode:vertical-rl] rotate-180">
          {ratingLabel}
        </span>
      </div>
    </div>
  );
}
