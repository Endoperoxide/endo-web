import fs from "node:fs";
import path from "node:path";

import { parseFrontmatter } from "../src/utils/frontmatter_utils";
import { GameFrontmatterSchema } from "../src/utils/game_utils";

const ROOT = process.cwd();
const REVIEWS_SOURCE_DIR = path.join(ROOT, "src", "reviews");
const REVIEWS_OUTPUT_DIR = path.join(ROOT, "reviews");

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

    fs.writeFileSync(
      outputFile,
      `<!doctype html>
        <html lang="en" data-game-slug="${slug}">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Endoperoxide</title>
          </head>
          <body>
            <div id="root"></div>
            <script type="module" src="./../../src/pages/Reviews/GameReviewEntry.tsx"></script>
          </body>
        </html>
    `,
    );
  }

  console.log(`Generated ${reviewFiles.length} game pages.`);
}

generatePages();
