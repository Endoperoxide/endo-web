import { useState } from "react";
import type { Game } from "@/utils/game_utils";
import type { Page } from "@/utils/page_utils";
import HomePageFooterSection from "@/pages/Home/components/HomePageFooterSection";
import HomePageDisplaySection from "./components/HomePageDisplaySection";
import HomePageRecentReviewsSection from "./components/HomePageRecentReviewsSection";
import HomePageDescriptionSection from "@/pages/Home/components/HomePageDescriptionSection";
import HomePageAboutMeSection from "./components/HomePageAboutMeSection";
import GameModal from "@/components/Modal/GameModal/GameModal";

type Properties = {
  onNavigate: (page: Page) => void;
};

export default function HomePage({ onNavigate }: Properties) {
  const [modalGame, setModalGame] = useState<Game | null>(null);

  return (
    <main className="min-h-dvh">
      <HomePageDisplaySection />

      <div className="px-4 md:px-15">
        <HomePageRecentReviewsSection
          onSelectGame={setModalGame}
          onNavigate={onNavigate}
        />
        <HomePageAboutMeSection />
        <HomePageDescriptionSection />
        <HomePageFooterSection />
      </div>

      {modalGame && (
        <GameModal game={modalGame} onClose={() => setModalGame(null)} />
      )}
    </main>
  );
}
