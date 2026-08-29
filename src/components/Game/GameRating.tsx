import { Game } from "@/utils/game_utils";
import { ratingLabel, ratingGradientColor } from "@/utils/rating_utils";

type Properties = {
  game: Game;
  barSide?: "left" | "right";
};

export default function GameRating({ game, barSide = "left" }: Properties) {
  const color = ratingGradientColor(game.rating);
  const label = ratingLabel(game.rating);

  // Bar
  const bar = (
    <div className="w-0.75 rounded-xs" style={{ backgroundColor: color }} />
  );

  // Text
  const text = (
    <div className={barSide === "right" ? "text-right" : "text-left"}>
      <div
        className={`flex items-baseline gap-0.5 ${
          barSide === "right" ? "justify-end" : "justify-start"
        }`}
      >
        {/* Rating number */}
        <span
          className="text-[2rem] font-bold leading-none tracking-tight"
          style={{ color }}
        >
          {game.rating.toFixed(1)}
        </span>

        {/* Out of 10 string */}
        <span className="text-[0.85rem] font-medium text-text-primary">
          /10
        </span>
      </div>

      {/* Rating label */}
      <div
        className="mt-0.5 text-[0.7em] uppercase tracking-widest"
        style={{ color }}
      >
        {label}
      </div>
    </div>
  );

  return (
    <div className="flex gap-2">
      {/* Change bar and text position depending on optional side arg */}
      {barSide === "right" ? (
        <>
          {text}
          {bar}
        </>
      ) : (
        <>
          {bar}
          {text}
        </>
      )}
    </div>
  );
}
