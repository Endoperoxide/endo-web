import { Game } from "@/utils/game_utils";

type Properties = {
  game: Game;
  metaColor?: string;
};

export default function GameTitle({
  game,
  metaColor = "text-text-accent",
}: Properties) {
  return (
    <div className="flex flex-1 flex-col justify-center gap-2">
      {/* Title */}
      <h1 className="font-bold truncate leading-none text-[clamp(0.75rem,8cqw,1.35rem)] text-text-primary">
        {game.title}
      </h1>

      {/* Year / platform */}
      <span
        className={`uppercase tracking-widest text-[clamp(0.6rem,0.9vw,0.75rem)] ${metaColor}`}
      >
        {game.year} · {game.platforms.join("/")}
      </span>
    </div>
  );
}
