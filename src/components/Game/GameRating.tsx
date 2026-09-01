// GameRating.tsx
import { Game } from "@/utils/game_utils";
import { ratingLabel, ratingGradientColor } from "@/utils/rating_utils";

type Properties = {
  game: Game;
  barSide?: "left" | "right";
};

export default function GameRating({ game, barSide = "left" }: Properties) {
  const color = ratingGradientColor(game.rating);
  const label = ratingLabel(game.rating);

  return (
    <div className="flex gap-2">
      {barSide === "right" ? (
        <>
          {renderText(color, label, game.rating, barSide)}
          {renderBar(color)}
        </>
      ) : (
        <>
          {renderBar(color)}
          {renderText(color, label, game.rating, barSide)}
        </>
      )}
    </div>
  );
}

function renderBar(color: string) {
  return (
    <div className="w-0.75 rounded-xs" style={{ backgroundColor: color }} />
  );
}

function renderText(
  color: string,
  label: string,
  rating: number,
  barSide: "left" | "right",
) {
  return (
    <div className={barSide === "right" ? "text-right" : "text-left"}>
      <div
        className={`flex items-baseline gap-0.5 ${
          barSide === "right" ? "justify-end" : "justify-start"
        }`}
      >
        {/* Rating number */}
        <span
          className="font-bold leading-none tracking-tight text-[clamp(1.1rem,14cqw,2rem)]"
          style={{ color }}
        >
          {rating.toFixed(1)}
        </span>

        {/* Out of 10 string */}
        <span className="font-medium text-text-primary text-[clamp(0.55rem,5cqw,0.85rem)]">
          /10
        </span>
      </div>

      {/* Rating label */}
      <div
        className="mt-0.5 uppercase tracking-widest text-[clamp(0.5rem,4cqw,0.7rem)]"
        style={{ color }}
      >
        {label}
      </div>
    </div>
  );
}
