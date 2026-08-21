export type Page = "home" | "reviews" | "hall-of-fame";

export const PAGES: { page: Page; label: string }[] = [
  { page: "home", label: "Home" },
  { page: "reviews", label: "Reviews" },
  { page: "hall-of-fame", label: "Hall of Fame" },
];
