import type { Game } from "@/utils/game_utils";

const RATING_GRADIENT_MAX = 10;
const RATING_GRADIENT_START = "var(--color-rating-low)";
const RATING_GRADIENT_END = "var(--color-rating-high)";

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
  { label: "All Games", value: "all" },
  { label: "Masterpiece", value: "masterpiece" },
  { label: "Excellent", value: "excellent" },
  { label: "Great", value: "great" },
  { label: "Good", value: "good" },
  { label: "Mixed", value: "mixed" },
  { label: "Poor", value: "poor" },
] satisfies {
  label: string;
  value: RatingTier;
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

export function ratingGradientColor(rating: number): string {
  const percent = clamp((rating / RATING_GRADIENT_MAX) * 100, 0, 100);

  // Stay near white longer, then accelerate toward pink
  const easedPercent = Math.pow(percent / 100, 3) * 100;

  return `color-mix(
    in srgb,
    ${RATING_GRADIENT_END} ${easedPercent}%,
    ${RATING_GRADIENT_START}
  )`;
}

function clamp(n: number, min: number, max: number) {
  return Math.min(Math.max(n, min), max);
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
