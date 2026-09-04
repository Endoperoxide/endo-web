import fs from "node:fs";
import path from "node:path";

import { parseFrontmatter } from "@/utils/frontmatter_utils";
import { GameFrontmatterSchema } from "@/utils/game_utils";

const ROOT = process.cwd();
const REVIEWS_SOURCE_DIR = path.join(ROOT, "src", "content", "reviews");
const REVIEWS_OUTPUT_DIR = path.join(ROOT, "reviews"); // STOP FUCKING CHANGING THIS, THIS SHOULD ALWAYS BE JUST REVIEWS

const generateHtml = (slug: string) => `
<!doctype html>
<html lang="en" data-game-slug="${slug}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Endoperoxide's website for random stuff"
    />
    <title>Endoperoxide</title>
    <link rel="icon" type="image/svg+xml" href="/src/assets/Vector/logo.svg" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./../../src/pages/GameReview/GameReviewEntry.tsx"></script>
  </body>
</html>
`;

function generatePages() {
  const reviewFiles = fs
    .readdirSync(REVIEWS_SOURCE_DIR)
    .filter((file) => file.endsWith(".md"));

  for (const file of reviewFiles) {
    const filePath = path.join(REVIEWS_SOURCE_DIR, file);
    const raw = fs.readFileSync(filePath, "utf8");
    const { data } = parseFrontmatter(raw);
    const result = GameFrontmatterSchema.safeParse(data);

    if (!result.success) {
      throw new Error(
        `Invalid frontmatter in ${file}:\n${result.error.issues
          .map((i) => `  - ${i.path.join(".")}: ${i.message}`)
          .join("\n")}`,
      );
    }

    const { slug } = result.data;
    const outputDir = path.join(REVIEWS_OUTPUT_DIR, slug);
    const outputFile = path.join(outputDir, "index.html");

    fs.mkdirSync(outputDir, { recursive: true });
    fs.writeFileSync(outputFile, generateHtml(slug), "utf8");
  }

  console.log(`Generated ${reviewFiles.length} game pages.`);
}

generatePages();
