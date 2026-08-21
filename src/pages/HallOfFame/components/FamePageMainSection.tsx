import type { Game } from "@/utils/game_utils";
import { podiumGames } from "@/utils/podium_utils";
import GameHoverGallery from "./GameHoverGallery";

type Properties = {
  onSelect: (game: Game) => void;
};

export default function FamePageMainSection({ onSelect }: Properties) {
  return (
    <div>
      <GameHoverGallery games={podiumGames} onSelect={onSelect} />
    </div>
  );
}
