import { Game } from "@/utils/game_utils";

type Properties = {
  game: Game;
};

export default function GameTitle({ game }: Properties) {
  return (
    <div className="flex flex-1 flex-col justify-center gap-2">
      {/* Title */}
      <div className="font-display font-bold leading-none text-[clamp(0.8rem,9cqw,1.5rem)] text-text-primary">
        {game.title}
      </div>

      {/* Year / platform */}
      <div className="font-mono uppercase tracking-widest text-[clamp(0.6rem,0.9vw,0.75rem)] text-text-muted">
        {game.year} · {game.platform}
      </div>
    </div>
  );
}
