import { useState } from "react";
import type { Page } from "@/utils/page_utils";
import type { Game } from "@/utils/game_utils";

export function useNavigation() {
  const [page, setPage] = useState<Page>("home");

  function navigate(next: Page) {
    if (next === page) return;

    setPage(next);
  }

  return {
    page,
    navigate,
  };
}
