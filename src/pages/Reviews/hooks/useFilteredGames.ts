import { useEffect, useMemo, useState } from "react";
import { games } from "@/utils/load_game_utils";
import type { Game } from "@/utils/game_utils";
import type { RatingTier } from "@/utils/rating_utils";
import { filterByTier } from "@/utils/rating_utils";
import type { SortOrder } from "@/pages/Reviews/components/SortButton";

export function useFilteredGames(onSelect: (game: Game | null) => void) {
  const [activeTier, setActiveTier] = useState<RatingTier>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("ascending");
  const [activeIndex, setActiveIndex] = useState(0);

  const filtered = useMemo(() => {
    const tierFiltered = filterByTier(games, activeTier);
    const normalizedQuery = searchQuery.trim().toLowerCase();

    const searched = !normalizedQuery
      ? tierFiltered
      : tierFiltered.filter((game) => {
          const haystack = [game.title, String(game.year)]
            .join(" ")
            .toLowerCase();
          return haystack.includes(normalizedQuery);
        });

    // adjust to your real SortOrder values / Game fields
    const sorted = [...searched].sort((a, b) => {
      switch (sortOrder) {
        case "ascending":
          return b.year - a.year;
        case "descending":
          return a.year - b.year;
        default:
          return 0;
      }
    });

    return sorted;
  }, [activeTier, searchQuery, sortOrder]);

  useEffect(() => {
    setActiveIndex(0);
    onSelect(filtered[0] ?? null);
  }, [filtered]);

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
    sortOrder,
    setSortOrder,
    activeIndex,
    handleActiveChange,
  };
}
