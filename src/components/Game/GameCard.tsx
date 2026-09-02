import type { Game } from "@/utils/game_utils";

import GameCoverArt from "@/components/Game/GameCoverArt";
import { PAGES } from "@/utils/page_utils";
import GameRating from "./GameRating";

type Properties = {
  game: Game;
};

export default function GameCard({ game }: Properties) {
  return (
    <a
      href={`${PAGES.reviews.path}${game.slug}/`}
      className="relative block w-full cursor-pointer overflow-hidden border-0 rounded-md"
    >
      <div className="flex flex-col">
        <div className="flex flex-1">
          <GameCoverArt game={game} />
        </div>
        <p className="bg-background-highlight text-center text-text-primary p-1  w-full">
          <GameRating game={game} />
        </p>
      </div>
    </a>
  );
}
