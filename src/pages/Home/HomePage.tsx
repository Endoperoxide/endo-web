import HomePageDescriptionSection from "@/pages/Home/components/HomePageDescriptionSection";
import HomePageDisplaySection from "./components/HomePageDisplaySection";
import HomePageIntroSection from "./components/HomePageIntroSection";

export default function HomePage() {
  return (
    <>
      <HomePageDisplaySection />
      <HomePageIntroSection />
      <HomePageDescriptionSection />
    </>
  );
}
