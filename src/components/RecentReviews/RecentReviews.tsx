import GameCard from "@/components/GameCard/GameCard";
import type { Game } from "@/utils/game_utils";
import { recentGames } from "@/utils/load_game_utils";

const CARD_WIDTH = "clamp(230px, 25vw, 320px)";

type Properties = {
  orientation: "horizontal" | "vertical";
  onSelect: (game: Game) => void;
};

export default function RecentReviews({ orientation, onSelect }: Properties) {
  const track = [...recentGames, ...recentGames];
  const isHorizontal = orientation === "horizontal";

  const containerClasses = isHorizontal
    ? "overflow-hidden pt-4 pb-5 [mask-image:linear-gradient(to_right,transparent,black_5%,black_90%,transparent)]"
    : "overflow-hidden px-5 [mask-image:linear-gradient(to_bottom,transparent,black_5%,black_90%,transparent)]";

  const trackClasses = isHorizontal
    ? "flex w-max gap-4.5 pl-6 animate-recent-scroll-horizontal"
    : "flex h-max flex-col gap-4.5 pt-6 animate-recent-scroll-vertical";

  return (
    <div className={containerClasses}>
      <div className={`${trackClasses} hover:[animation-play-state:paused]`}>
        {track.map((game, i) => (
          <div
            key={`${game.slug}-${i}`}
            style={{ width: CARD_WIDTH }}
            className="flex-none"
          >
            <GameCard game={game} onClick={() => onSelect(game)} />
          </div>
        ))}
      </div>
    </div>
  );
}
