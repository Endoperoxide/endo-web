export type Page = "home" | "reviews";

export const PAGES: Record<Page, { label: string; path: string }> = {
  home: { label: "Home", path: "/endo-web/" },
  reviews: { label: "Reviews", path: "/endo-web/reviews/" },
};
