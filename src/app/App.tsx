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

const PAGE_COMPONENTS: Record<Page, React.ComponentType> = {
  home: HomePage,
  reviews: ReviewsPage,
};

export default function App() {
  const { page, navigate } = useNavigation();
  const PageComponent = PAGE_COMPONENTS[page];
  const pageContainerRef = useRef<HTMLDivElement>(null);
  const [isUpcomingOpen, setIsUpcomingOpen] = useState(false);
  const scrollY = useElementScroll(pageContainerRef);

  useScrollToTop(pageContainerRef, page);

  return (
    <div className="relative min-h-screen bg-background-main">
      <TriangleBackground scrollOffset={scrollY} />
      <div className="relative mx-auto flex h-dvh max-w-6xl flex-col border-l border-r border-border-base bg-background-main">
        {/* Navbar */}
        <Navbar current={page} onNavigate={navigate} />

        {/* Page */}
        <main ref={pageContainerRef} className="min-h-0 flex-1 overflow-auto">
          <PageComponent />
        </main>

        {isUpcomingOpen && (
          <ListModal onClose={() => setIsUpcomingOpen(false)} />
        )}
      </div>
    </div>
  );
}
