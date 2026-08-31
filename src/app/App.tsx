import { useRef, useState } from "react";
import { useNavigation } from "@/app/hooks/useNavigation";
import { useScrollToTop } from "@/app/hooks/useScrollToTop";
import { useElementScroll } from "@/app/hooks/useElementScroll";
import type { Page } from "@/utils/page_utils";
import HomePage from "@/pages/Home/HomePage";
import ReviewsPage from "@/pages/Reviews/ReviewsPage";
import Navbar from "@/components/Navbar/Navbar";
import ListModal from "@/components/Modal/ListModal/ListModal";
import TriangleBackground from "@/components/TriangleBackground";

export default function App() {
  const { page, navigate } = useNavigation();
  const pageContainerRef = useRef<HTMLDivElement>(null);
  const [isUpcomingOpen, setIsUpcomingOpen] = useState(false);
  const scrollY = useElementScroll(pageContainerRef);

  useScrollToTop(pageContainerRef, page);

  function renderPageComponent(page: Page) {
    switch (page) {
      case "home":
        return <HomePage />;
      case "reviews":
        return <ReviewsPage />;
      default: {
        const exhaustiveCheck: never = page;
        return exhaustiveCheck;
      }
    }
  }

  return (
    <div className="relative min-h-screen bg-background-main">
      <TriangleBackground scrollOffset={scrollY} />
      <div className="relative mx-auto flex h-dvh max-w-6xl flex-col border-l border-r border-border-base bg-background-main">
        {/* Navbar */}
        <Navbar current={page} onNavigate={navigate} />

        {/* Page */}
        <main ref={pageContainerRef} className="min-h-0 flex-1 overflow-auto">
          {renderPageComponent(page)}
        </main>

        {isUpcomingOpen && (
          <ListModal onClose={() => setIsUpcomingOpen(false)} />
        )}
      </div>
    </div>
  );
}
