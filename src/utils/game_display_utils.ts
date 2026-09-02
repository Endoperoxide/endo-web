import { Game, CATEGORY_LABELS } from "@/utils/game_utils";
import { ratingLabel, ratingGradientColor } from "@/utils/rating_utils";

const NA = "N/A" as const;
const NOT_REVIEWED_LABEL = "Not Reviewed";
const NOT_REVIEWED_TEXT = `## Nothing here yet!

I have not reviewed this game yet. Check back later for my thoughts!`;

export type GameDisplay = {
  reviewed: boolean;
  reviewText: string;
  ratingText: string;
  ratingLabel: string;
  color: string;
  categories: Record<keyof typeof CATEGORY_LABELS, string>;
  reviewDateText: string;
  playtimeText: string;
};

export function getGameDisplay(game: Game): GameDisplay {
  if (game.rating === undefined) {
    return {
      reviewed: false,
      reviewText: NOT_REVIEWED_TEXT,
      ratingText: NA,
      ratingLabel: NOT_REVIEWED_LABEL,
      color: "var(--color-text-primary)",
      categories: Object.fromEntries(
        Object.keys(CATEGORY_LABELS).map((k) => [k, NA]),
      ) as GameDisplay["categories"],
      reviewDateText: NA,
      playtimeText: NA,
    };
  }

  return {
    reviewed: true,
    reviewText: game.review,
    ratingText: game.rating.toFixed(1),
    ratingLabel: ratingLabel(game.rating),
    color: ratingGradientColor(game.rating),
    categories: Object.fromEntries(
      Object.entries(game.categories ?? {}).map(([k, v]) => [k, String(v)]),
    ) as GameDisplay["categories"],
    reviewDateText: game.reviewDate!,
    playtimeText: `~${game.playtimeHours}h`,
  };
}
