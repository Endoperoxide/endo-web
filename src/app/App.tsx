import { useRef } from "react";
import { useNavigation } from "@/app/hooks/useNavigation";
import { useScrollToTop } from "@/app/hooks/useScrollToTop";
import type { Page } from "@/utils/page_utils";
import HomePage from "@/pages/Home/HomePage";
import ReviewsPage from "@/pages/Reviews/ReviewsPage";
import HallOfFamePage from "@/pages/HallOfFame/HallOfFamePage";
import Navbar from "@/components/Navbar/Navbar";

export default function App() {
  const { page, navigate, setSelectedGame } = useNavigation();
  const pageContainerRef = useRef<HTMLDivElement>(null);

  // useLenis(pageContainerRef); -- This is hella broken ngl
  useScrollToTop(pageContainerRef, page);

  function renderPageComponent(page: Page) {
    switch (page) {
      case "home":
        return <HomePage onNavigate={navigate} />;
      case "reviews":
        return <ReviewsPage onSelect={setSelectedGame} />;
      case "hall-of-fame":
        return <HallOfFamePage onSelect={setSelectedGame} />;
      default: {
        const exhaustiveCheck: never = page;
        return exhaustiveCheck;
      }
    }
  }

  return (
    <div className="relative min-h-screen bg-background-main">
      <div className="relative flex h-dvh flex-col">
        {/* Navbar */}
        <Navbar current={page} onNavigate={navigate} />

        {/* Page */}
        <div ref={pageContainerRef} className="min-h-0 flex-1 overflow-auto">
          {renderPageComponent(page)}
        </div>
      </div>
    </div>
  );
}
