// src/pages/Reviews/hooks/useFilteredGames.ts
import { useEffect, useMemo, useState } from "react";
import { games } from "@/utils/load_game_utils";
import type { Game } from "@/utils/game_utils";
import type { RatingTier } from "@/utils/rating_utils";
import { filterByTier } from "@/utils/rating_utils";

export function useFilteredGames(onSelect: (game: Game | null) => void) {
  const [activeTier, setActiveTier] = useState<RatingTier>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const filtered = useMemo(() => {
    const tierFiltered = filterByTier(games, activeTier);
    const normalizedQuery = searchQuery.trim().toLowerCase();

    if (!normalizedQuery) {
      return tierFiltered;
    }

    return tierFiltered.filter((game) => {
      const haystack = [game.title, String(game.year)].join(" ").toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [activeTier, searchQuery]);

  useEffect(() => {
    setActiveIndex(0);
    onSelect(filtered[0] ?? null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtered]);

  // Whatever card the carousel reports as active — whether the user
  // clicked it directly or scrolled/snapped onto it — becomes both the
  // local active index and the info panel's selected game.
  function handleActiveChange(index: number) {
    setActiveIndex(index);
    onSelect(filtered[index] ?? null);
  }

  return {
    filtered,
    activeTier,
    setActiveTier,
    searchQuery,
    setSearchQuery,
    activeIndex,
    handleActiveChange,
  };
}
