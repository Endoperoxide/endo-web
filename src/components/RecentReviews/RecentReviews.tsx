import GameCard from "@/components/GameCard/GameCard";
import type { Game } from "@/utils/game_utils";
import { recentGames } from "@/utils/load_game_utils";

const SCROLL_DURATION_S = 32;
const CARD_WIDTH = "clamp(230px, 26vw, 320px)";

type Orientation = "horizontal" | "vertical";

type Properties = {
  orientation: Orientation;
  onSelect: (game: Game) => void;
};

export default function RecentReviews({ orientation, onSelect }: Properties) {
  const track = [...recentGames, ...recentGames];
  const isHorizontal = orientation === "horizontal";

  const maskDirection = isHorizontal ? "to right" : "to bottom";
  const animationName = `recent-reviews-scroll-${orientation}`;

  return (
    <div
      style={{
        maskImage: `linear-gradient(${maskDirection}, transparent, black 5%, black 95%, transparent)`,
        WebkitMaskImage: `linear-gradient(${maskDirection}, transparent, black 5%, black 95%, transparent)`,
      }}
      className={`overflow-hidden ${isHorizontal ? "pt-4 pb-6" : "px-6"}`}
    >
      {/* Animation */}
      <style>{`
        @keyframes ${animationName} {
          from { transform: ${isHorizontal ? "translateX(0)" : "translateY(0)"}; }
          to { transform: ${isHorizontal ? "translateX(-50%)" : "translateY(-50%)"}; }
        }
        .${animationName}-track {
          animation: ${animationName} ${SCROLL_DURATION_S}s linear infinite;
        }
        .${animationName}-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className={`${animationName}-track flex ${
          isHorizontal ? "w-max gap-4.5 pl-6" : "h-max flex-col gap-4.5 pt-6"
        }`}
      >
        {/* List of all cards */}
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
