import { useState } from "react";
import type { PodiumGame } from "@/utils/podium_utils";

export function useActiveGame(games: PodiumGame[]) {
  const [activeIndex, setActiveIndex] = useState(0);

  const clips = games.map((g) => g.clipUrl);
  const activeGame = games[activeIndex]?.game;

  return { clips, activeGame, setActiveIndex };
}
