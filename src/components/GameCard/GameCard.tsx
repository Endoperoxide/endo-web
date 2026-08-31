import type { Game } from "@/utils/game_utils";
import { useTilt } from "@/components/GameCard/hooks/useTilt";
import RatingBadge from "@/components/GameCard/components/RatingBadge";
import GameCoverArt from "@/components/Game/GameCoverArt";
import GameTitle from "@/components/Game/GameTitle";

type Properties = {
  game: Game;
  onClick?: () => void;
};

export default function GameCard({ game, onClick }: Properties) {
  const { ref, hovered, tilt, mouseHandlers } = useTilt<HTMLButtonElement>();

  return (
    <button
      {...mouseHandlers}
      ref={ref}
      onClick={onClick}
      className="relative block w-full cursor-pointer aspect-2/3"
    >
      <div
        className="relative h-full w-full will-change-transform"
        style={{
          backfaceVisibility: "hidden",
          transform: hovered
            ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-6px) scale(1.02)`
            : `perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)`,
          transition: hovered
            ? "transform 0.1s ease-out"
            : "transform 0.4s ease-out",
        }}
      >
        <div className="relative h-full w-full overflow-hidden @container">
          <GameCoverArt game={game} />

          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-250"
            style={{
              opacity: hovered ? 0.5 : 0,
              background: `linear-gradient(${105 + tilt.y * 3}deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 40%)`,
            }}
          />

          <div className="absolute top-0 right-0">
            <RatingBadge rating={game.rating} size="medium" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-[clamp(12px,8cqw,24px)] text-left">
            <GameTitle game={game} />
          </div>
        </div>
      </div>
    </button>
  );
}
