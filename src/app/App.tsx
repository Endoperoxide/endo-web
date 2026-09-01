import { useRef } from "react";

import { useScrollToTop } from "@/app/hooks/useScrollToTop";
import { useElementScroll } from "@/app/hooks/useElementScroll";

import Navbar from "@/components/Navbar/Navbar";
import TriangleBackground from "@/components/TriangleBackground";

type Properties = {
  children: React.ReactNode;
  currentPage: "home" | "reviews";
};

export default function App({ children, currentPage }: Properties) {
  const pageContainerRef = useRef<HTMLDivElement>(null);

  const scrollY = useElementScroll(pageContainerRef);
  useScrollToTop(pageContainerRef, currentPage);

  return (
    <div className="relative min-h-screen bg-background-main">
      <TriangleBackground scrollOffset={scrollY} />

      <div className="relative mx-auto flex h-dvh max-w-6xl flex-col border-l border-r border-border-base bg-background-main">
        <Navbar current={currentPage} />

        <main ref={pageContainerRef} className="min-h-0 flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
