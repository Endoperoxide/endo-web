import HomePageDescriptionSection from "@/pages/Home/components/HomePageDescriptionSection";
import HomePageDisplaySection from "./components/HomePageDisplaySection";
import HomePageIntroSection from "./components/HomePageIntroSection";
import PlusDivider from "@/components/PlusDivider";

export default function HomePage() {
  return (
    <>
      <HomePageDisplaySection />
      <PlusDivider theme="light" />
      <HomePageIntroSection />
      <PlusDivider theme="light" />
      <PlusDivider theme="dark" />
      <HomePageDescriptionSection />
      <PlusDivider theme="dark" />
    </>
  );
}
