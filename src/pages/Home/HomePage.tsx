import HomePageDisplaySection from "@/pages/Home/components/HomePageDisplaySection";
import HomePageIntroSection from "@/pages/Home/components/HomePageIntroSection";
import PageDivider from "@/components/Page/PageDivider";
import HomePageStatusSection from "@/pages/Home/components/HomePageStatusSection";

export default function HomePage() {
  return (
    <>
      <HomePageDisplaySection />
      <PageDivider theme="light" />
      <HomePageIntroSection />
      <PageDivider theme="light" />
      <PageDivider theme="dark" />
      <HomePageStatusSection />
      <PageDivider theme="dark" />
    </>
  );
}
