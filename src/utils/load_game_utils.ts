import { parseFrontmatter } from "@/utils/frontmatter_utils";
import { GameFrontmatterSchema, type Game } from "@/utils/game_utils";

const seenSlugs = new Set<string>();

const reviewFiles = import.meta.glob("../reviews/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

export const games: Game[] = Object.entries(reviewFiles).map(parseReviewFile);

function parseReviewFile([path, raw]: [string, string]): Game {
  const { data, content } = parseFrontmatter(raw);

  const result = GameFrontmatterSchema.safeParse(data);
  if (!result.success) {
    throw new Error(
      `Invalid frontmatter in ${path}:\n${result.error.issues
        .map((i) => `  - ${i.path.join(".")}: ${i.message}`)
        .join("\n")}`,
    );
  }

  if (seenSlugs.has(result.data.slug)) {
    throw new Error(
      `Duplicate slug "${result.data.slug}" — found again in ${path}`,
    );
  }
  seenSlugs.add(result.data.slug);

  return { ...result.data, review: content };
}
