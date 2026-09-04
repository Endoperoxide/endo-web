import { z as zod } from "zod";

const CATEGORY_KEYS = [
  "gameplay",
  "story",
  "music",
  "soundDesign",
  "visualDesign",
  "replayability",
] as const;

const PLATFORM_VALUES = [
  "PC",
  "Wii",
  "PlayStation",
  "Switch",
  "Xbox",
  "Wii U",
  "Nintendo DS",
  "Nintendo 3DS",
  "Web Browser",
] as const;

const CategoriesSchema = zod.object({
  gameplay: zod.number().min(0).max(10).optional(),
  story: zod.number().min(0).max(10).optional(),
  music: zod.number().min(0).max(10).optional(),
  soundDesign: zod.number().min(0).max(10).optional(),
  visualDesign: zod.number().min(0).max(10).optional(),
  replayability: zod.number().min(0).max(10).optional(),
});

const BaseFrontmatterSchema = zod.object({
  slug: zod.string().regex(/^[a-z0-9-]+$/, "slug must be lowercase-kebab-case"),
  title: zod.string().min(1),
  year: zod.number().int(),
  coverUrl: zod.string(),
  platforms: zod.array(zod.enum(PLATFORM_VALUES)),
  reviewDate: zod.string().optional(),
  playtimeHours: zod.number().min(0).optional(),
  rating: zod.number().min(0).max(10).optional(),
  categories: CategoriesSchema.optional(),
});

function categoriesFilledCount(categories: Categories | undefined) {
  if (!categories) return 0;
  return CATEGORY_KEYS.filter((key) => categories[key] !== undefined).length;
}

function stripNulls(value: unknown): unknown {
  if (value === null) return undefined;
  if (Array.isArray(value)) return value.map(stripNulls);
  if (typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([key, val]) => [
        key,
        stripNulls(val),
      ]),
    );
  }
  return value;
}

export const GameFrontmatterSchema = zod.preprocess(
  stripNulls,
  BaseFrontmatterSchema.superRefine((data, ctx) => {
    const flatFields = [data.reviewDate, data.playtimeHours, data.rating];
    const flatPresentCount = flatFields.filter((v) => v !== undefined).length;
    const catPresentCount = categoriesFilledCount(data.categories);

    const totalPresent = flatPresentCount + catPresentCount;
    const totalFields = flatFields.length + CATEGORY_KEYS.length;

    if (totalPresent > 0 && totalPresent < totalFields) {
      ctx.addIssue({
        code: zod.ZodIssueCode.custom,
        message:
          "Partial review data — fill in every review field (reviewDate, playtimeHours, rating, and all categories), or leave them all empty for an unreviewed game.",
      });
    }
  }),
);

export const CATEGORY_LABELS: Record<(typeof CATEGORY_KEYS)[number], string> = {
  gameplay: "Gameplay",
  story: "Story",
  music: "Music",
  soundDesign: "Sound Design",
  visualDesign: "Visual Design",
  replayability: "Replayability",
};

export type Categories = zod.infer<typeof CategoriesSchema>;
export type GameFrontmatter = zod.infer<typeof GameFrontmatterSchema>;
export type Game = GameFrontmatter & { review: string };

export function isReviewed(game: Game): game is Game &
  Required<Pick<Game, "reviewDate" | "playtimeHours" | "rating">> & {
    categories: Required<Categories>;
  } {
  return game.rating !== undefined;
}
