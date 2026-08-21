import type { Game } from "@/utils/game_utils";

export type RatingTier =
  | "all"
  | "masterpiece"
  | "excellent"
  | "great"
  | "good"
  | "mixed"
  | "poor";

export const RATING_THRESHOLDS = {
  masterpiece: 9.5,
  excellent: 9,
  great: 8,
  good: 6,
  mixed: 5,
} as const;

export const RATING_TIERS = [
  { label: "All Games", value: "all", range: "" },
  { label: "Masterpiece", value: "masterpiece", range: "9.5–10" },
  { label: "Excellent", value: "excellent", range: "9–9.4" },
  { label: "Great", value: "great", range: "8–8.9" },
  { label: "Good", value: "good", range: "6–7.9" },
  { label: "Mixed", value: "mixed", range: "5–5.9" },
  { label: "Poor", value: "poor", range: "<5" },
] satisfies {
  label: string;
  value: RatingTier;
  range: string;
}[];

export function getRatingTier(rating: number): RatingTier {
  if (rating >= RATING_THRESHOLDS.masterpiece) return "masterpiece";
  if (rating >= RATING_THRESHOLDS.excellent) return "excellent";
  if (rating >= RATING_THRESHOLDS.great) return "great";
  if (rating >= RATING_THRESHOLDS.good) return "good";
  if (rating >= RATING_THRESHOLDS.mixed) return "mixed";

  return "poor";
}

export function ratingLabel(rating: number): string {
  const tier = getRatingTier(rating);

  return RATING_TIERS.find((item) => item.value === tier)?.label ?? "Poor";
}

export function ratingColor(rating: number): string {
  const tier = getRatingTier(rating);

  switch (tier) {
    case "masterpiece":
    case "excellent":
      return "var(--color-rating-gold)";

    case "great":
      return "var(--color-rating-green)";

    case "good":
    case "mixed":
      return "var(--color-rating-blue)";

    default:
      return "var(--color-rating-red)";
  }
}

type PodiumEntry = {
  label: string;
  color: string;
  glow: string;
};

export const PODIUM_RECORD: Record<number, PodiumEntry> = {
  1: {
    label: "Gold",
    color: "var(--color-rating-gold)",
    glow: "color-mix(in srgb, var(--color-rating-gold) 60%, transparent)",
  },
  2: {
    label: "Silver",
    color: "var(--color-rating-silver)",
    glow: "color-mix(in srgb, var(--color-rating-silver) 60%, transparent)",
  },
  3: {
    label: "Bronze",
    color: "var(--color-rating-bronze)",
    glow: "color-mix(in srgb, var(--color-rating-bronze) 60%, transparent)",
  },
};

export function filterByTier(list: Game[], tier: RatingTier): Game[] {
  if (tier === "all") {
    return list;
  }

  return list.filter((game) => getRatingTier(game.rating) === tier);
}
