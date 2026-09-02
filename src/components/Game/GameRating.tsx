import { getGameDisplay } from "@/utils/game_display_utils";
import { Game } from "@/utils/game_utils";

type Properties = {
  game: Game;
  barSide?: "left" | "right";
};

export default function GameRating({ game, barSide = "left" }: Properties) {
  const { ratingText, ratingLabel, color } = getGameDisplay(game);

  return (
    <div className="flex gap-2">
      {barSide === "right" ? (
        <>
          {renderText(color, ratingLabel, ratingText, barSide)}
          {renderBar(color)}
        </>
      ) : (
        <>
          {renderBar(color)}
          {renderText(color, ratingLabel, ratingText, barSide)}
        </>
      )}
    </div>
  );
}

function renderText(
  color: string,
  label: string,
  ratingText: string,
  barSide: "left" | "right",
) {
  return (
    <div className={barSide === "right" ? "text-right" : "text-left"}>
      <div
        className={`flex items-baseline gap-0.5 ${barSide === "right" ? "justify-end" : "justify-start"}`}
      >
        <span
          className="font-bold leading-none tracking-tight text-[clamp(1.1rem,14cqw,2rem)]"
          style={{ color }}
        >
          {ratingText}
        </span>
        {ratingText !== "N/A" && (
          <span className="font-medium text-text-primary text-[clamp(0.55rem,5cqw,0.85rem)]">
            /10
          </span>
        )}
      </div>
      <div
        className="mt-0.5 uppercase tracking-widest text-[clamp(0.5rem,4cqw,0.7rem)]"
        style={{ color }}
      >
        {label}
      </div>
    </div>
  );
}

function renderBar(color: string) {
  return (
    <div className="w-0.75 rounded-xs" style={{ backgroundColor: color }} />
  );
}
