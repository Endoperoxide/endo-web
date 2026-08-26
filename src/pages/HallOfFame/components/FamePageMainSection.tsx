import type { Game } from "@/utils/game_utils";
import { podiumGames } from "@/utils/podium_utils";

type Properties = {
  onSelect: (game: Game) => void;
};

export default function FamePageMainSection({ onSelect }: Properties) {
  return <section></section>;
}
