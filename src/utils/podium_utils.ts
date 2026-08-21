import type { Game } from "@/utils/game_utils";
import { games } from "@/utils/load_game_utils";
import silksongGameplay from "@/assets/GameplayShowcases/silksong_showcase.mp4";
import outerWilds from "@/assets/GameplayShowcases/outerwilds_showcase.mp4";

export type PodiumGame = {
  game: Game;
  clipUrl: string;
};

const PODIUM_ENTRIES: { slug: string; clipUrl: string }[] = [
  { slug: "outer-wilds", clipUrl: outerWilds },
  { slug: "hollow-knight-silksong", clipUrl: silksongGameplay },
];

export const podiumGames: PodiumGame[] = PODIUM_ENTRIES.map(
  ({ slug, clipUrl }) => {
    const game = games.find((g) => g.slug === slug);
    if (!game) return null;
    return { game, clipUrl };
  },
).filter((entry): entry is PodiumGame => entry !== null);
