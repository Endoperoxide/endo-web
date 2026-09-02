import { useRef } from "react";
import { useScrollToTop } from "@/app/hooks/useScrollToTop";
import { useElementScroll } from "@/app/hooks/useElementScroll";
import { Page } from "@/utils/page_utils";

import Navbar from "@/components/Navbar/Navbar";
import BackgroundTriangles from "@/components/Background/BackgroundTriangles";

type Properties = {
  children: React.ReactNode;
  current: Page;
};

export default function App({ children, current }: Properties) {
  const pageContainerRef = useRef<HTMLDivElement>(null);
  const scrollY = useElementScroll(pageContainerRef);
  useScrollToTop(pageContainerRef, current);

  return (
    <div className="relative min-h-screen bg-background-main">
      <BackgroundTriangles scrollOffset={scrollY} />

      <div className="relative mx-auto flex h-dvh max-w-6xl flex-col border-l border-r border-border-base bg-background-main">
        <Navbar current={current} />

        <main ref={pageContainerRef} className="min-h-0 flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
