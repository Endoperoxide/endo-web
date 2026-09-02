export type Page = "home" | "reviews" | "hallOfFame";

type PageConfig = {
  label: string;
  path: string;
  showInNav: boolean;
};

export const PAGES: Record<Page, PageConfig> = {
  home: {
    label: "Home",
    path: "/endo-web/",
    showInNav: true,
  },

  reviews: {
    label: "Reviews",
    path: "/endo-web/reviews/",
    showInNav: true,
  },

  hallOfFame: {
    label: "Hall of Fame",
    path: "/endo-web/hall-of-fame/",
    showInNav: false,
  },
};

export function getNavPages(): Page[] {
  return (Object.keys(PAGES) as Page[]).filter((page) => PAGES[page].showInNav);
}
