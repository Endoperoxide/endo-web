import { z as zod } from "zod";

const CategoriesSchema = zod.object({
  gameplay: zod.number().min(0).max(10),
  story: zod.number().min(0).max(10),
  music: zod.number().min(0).max(10),
  soundDesign: zod.number().min(0).max(10),
  visualDesign: zod.number().min(0).max(10),
  replayability: zod.number().min(0).max(10),
});

export const GameFrontmatterSchema = zod.object({
  slug: zod.string().regex(/^[a-z0-9-]+$/, "slug must be lowercase-kebab-case"),
  title: zod.string().min(1),
  year: zod.number().int(),
  reviewDate: zod.string(),
  playtimeHours: zod.number().min(0),
  rating: zod.number().min(0).max(10),
  coverUrl: zod.string(),
  platform: zod.string(),
  categories: CategoriesSchema,
});

export const CATEGORY_LABELS: Record<keyof Categories, string> = {
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
