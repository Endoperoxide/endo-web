import { load } from "js-yaml";

export function parseFrontmatter(raw: string): {
  data: Record<string, unknown>;
  content: string;
} {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);

  if (!match) {
    return { data: {}, content: raw.trim() };
  }

  const [, frontmatterBlock, body] = match;
  const data = (load(frontmatterBlock) as Record<string, unknown>) ?? {};

  return { data, content: body.trim() };
}
