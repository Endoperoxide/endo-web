import HomePageDisplaySection from "@/pages/Home/components/HomePageDisplaySection";
import HomePageIntroSection from "@/pages/Home/components/HomePageIntroSection";
import PlusDivider from "@/components/PlusDivider";
import HomePageStatusSection from "./components/HomePageStatusSection";

export default function HomePage() {
  return (
    <>
      <HomePageDisplaySection />
      <PlusDivider theme="light" />
      <HomePageIntroSection />
      <PlusDivider theme="light" />
      <PlusDivider theme="dark" />
      <HomePageStatusSection />
      <PlusDivider theme="dark" />
    </>
  );
}
