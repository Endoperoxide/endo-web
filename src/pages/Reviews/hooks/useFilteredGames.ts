import { useMemo, useState } from "react";
import { games } from "@/utils/load_game_utils";
import type { RatingTier } from "@/utils/rating_utils";
import { filterByTier } from "@/utils/rating_utils";
import type { SortOrder } from "@/pages/Reviews/components/SortButton";

export function useFilteredGames() {
  const [activeTier, setActiveTier] = useState<RatingTier>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("descending");

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

    const sorted = [...searched].sort((a, b) => {
      const aRating = a.rating;
      const bRating = b.rating;

      // Always put unreviewed games at the bottom.
      if (aRating === undefined && bRating === undefined) return 0;
      if (aRating === undefined) return 1;
      if (bRating === undefined) return -1;

      switch (sortOrder) {
        case "ascending":
          return aRating - bRating;

        case "descending":
          return bRating - aRating;

        default:
          return 0;
      }
    });

    return sorted;
  }, [activeTier, searchQuery, sortOrder]);

  return {
    filtered,
    activeTier,
    setActiveTier,
    searchQuery,
    setSearchQuery,
    sortOrder,
    setSortOrder,
  };
}
