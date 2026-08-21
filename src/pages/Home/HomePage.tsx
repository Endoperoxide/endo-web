import { useState } from "react";
import type { Game } from "@/utils/game_utils";
import type { Page } from "@/utils/page_utils";
import HomePageFooterSection from "@/pages/Home/components/HomePageFooterSection";
import GameModal from "@/components/GameModal/GameModal";
import HomePageDisplaySection from "./components/HomePageDisplaySection";
import HomePageRecentReviewsSection from "./components/HomePageRecentReviewsSection";
import HomePageDescriptionSection from "@/pages/Home/components/HomePageDescriptionSection";
import HomePageAboutMeSection from "./components/HomePageAboutMeSection";

type Properties = {
  onNavigate: (page: Page) => void;
};

export default function HomePage({ onNavigate }: Properties) {
  const [modalGame, setModalGame] = useState<Game | null>(null);

  return (
    <main className="min-h-dvh">
      <HomePageDisplaySection />

      <div>
        <HomePageRecentReviewsSection
          onSelectGame={setModalGame}
          onNavigate={onNavigate}
        />
        <HomePageAboutMeSection />
        <HomePageDescriptionSection onNavigate={onNavigate} />
        <HomePageFooterSection />
      </div>

      {modalGame && (
        <GameModal game={modalGame} onClose={() => setModalGame(null)} />
      )}
    </main>
  );
}
