import type { Game } from "@/utils/game_utils";
import GameCoverArt from "@/components/Game/GameCoverArt";
import GameModalMeta from "./GameModalMeta";

type Properties = {
  game: Game;
};

export default function GameModalInfo({ game }: Properties) {
  return (
    <div className="flex items-stretch gap-4">
      <div className="w-1/4 aspect-2/3">
        <GameCoverArt game={game} />
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <GameModalMeta game={game} />
      </div>
    </div>
  );
}
