import { Game } from "@/utils/game_utils";

type Properties = {
  game: Game;
};

export default function GameModalReview({ game }: Properties) {
  return (
    <div>
      <div className="h-full overflow-y-auto py-5">
        <p className="font-body font-light text-[0.8rem] leading-relaxed text-secondary">
          {game.review}
        </p>
      </div>
    </div>
  );
}
