import type { Page } from "@/utils/page_utils";
import HomePageFooterSection from "@/pages/Home/components/HomePageFooterSection";
import HomePageDescriptionSection from "@/pages/Home/components/HomePageDescriptionSection";
import HomePageAboutMeSection from "./components/HomePageAboutMeSection";
import HomePageDisplaySection from "./components/HomePageDisplaySection";
import HomePageMobileSection from "./components/HomePageMobileSection";

type Properties = {
  onNavigate: (page: Page) => void;
};

export default function HomePage({ onNavigate }: Properties) {
  return (
    <main className="min-h-dvh">
      <HomePageDisplaySection />
      <HomePageMobileSection />

      <div className="content-padding-horizontal">
        <HomePageAboutMeSection />
        <HomePageDescriptionSection />
        <HomePageFooterSection />
      </div>
    </main>
  );
}
