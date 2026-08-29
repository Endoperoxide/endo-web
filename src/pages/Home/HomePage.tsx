import type { Page } from "@/utils/page_utils";
import HomePageFooterSection from "@/pages/Home/components/HomePageFooterSection";
import HomePageDescriptionSection from "@/pages/Home/components/HomePageDescriptionSection";
import PageIntroSection from "@/components/Page/PageIntroSection";
import HomePageDisplaySection from "./components/HomePageDisplaySection";
import fayeBlueprint from "@/assets/Vector/faye_blueprint.svg";
import fayeAmped from "@/assets/Faye/faye_fired_up.png";

const DESCRIPTION_TEXT: string = `
  This website started due to burnout I've had from other projects,
  which was intended to be a stand-alone reviews website. And while this remains true,
  now it exists mostly as a hub of all my creative works such as Drawing, Writing and Coding projects. 
  `;

type Properties = {
  onNavigate: (page: Page) => void;
};

export default function HomePage({ onNavigate }: Properties) {
  return (
    <main className="min-h-dvh">
      <HomePageDisplaySection />
      <PageIntroSection title="ABOUT THIS SITE" description={DESCRIPTION_TEXT}>
        <img
          src={fayeAmped}
          alt="Faye Blueprint"
          className="w-full max-w-4/5 mx-auto lg:mx-0"
        />
      </PageIntroSection>
      {/* <HomePageMobileSection /> */}

      <div className="content-padding-horizontal">
        <HomePageDescriptionSection />
        <HomePageFooterSection />
      </div>
    </main>
  );
}
