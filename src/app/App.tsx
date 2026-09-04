import { useScrollToTop } from "@/app/hooks/useScrollToTop";
import { useWindowScroll } from "@/app/hooks/useWindowScroll";
import { Page } from "@/utils/page_utils";

import Navbar from "@/app/Navbar/Navbar";
import BackgroundTriangles from "@/components/Background/BackgroundTriangles";
import Footer from "@/app/Footer";

type Properties = {
  children: React.ReactNode;
  current: Page;
};

export default function App({ children, current }: Properties) {
  const scrollY = useWindowScroll();
  useScrollToTop(current);

  return (
    <div className="relative min-h-screen bg-background-main">
      <BackgroundTriangles scrollOffset={scrollY} />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col border-l border-r border-border-base bg-background-main">
        <Navbar current={current} />

        <main className="flex-1">{children}</main>

        <Footer />
      </div>
    </div>
  );
}
