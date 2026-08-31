import { parseFrontmatter } from "./frontmatter_utils";
import { GameFrontmatterSchema, type Game } from "./game_utils";

const seenSlugs = new Set<string>();
const RECENT_GAMES_COUNT = 3;

const reviewFiles = import.meta.glob("../reviews/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

export const games: Game[] = Object.entries(reviewFiles).map(parseReviewFile);
export const recentGames: Game[] = sortByMostRecent(games).slice(
  0,
  RECENT_GAMES_COUNT,
);

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

function parseReviewDate(dateStr: string): number {
  const [day, month, year] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day).getTime();
}

function sortByMostRecent(gamesToSort: Game[]): Game[] {
  return [...gamesToSort].sort(
    (a, b) => parseReviewDate(b.reviewDate) - parseReviewDate(a.reviewDate),
  );
}
