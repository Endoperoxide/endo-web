import type { Game } from "@/utils/game_utils";
import GameCardCarouselEmpty from "@/components/GameCardCarousel/components/GameCardCarouselEmpty";
import GameCardCarouselFull from "@/components/GameCardCarousel/components/GameCardCarouselFull";

type Props = {
  games: Game[];
  cardHeight?: string;
  onActiveChange?: (index: number) => void;
  onOffsetChange?: (offset: number) => void;
};

export default function GameCardCarousel({ games, ...rest }: Props) {
  if (!games.length) return <GameCardCarouselEmpty />;

  return <GameCardCarouselFull games={games} {...rest} />;
}
