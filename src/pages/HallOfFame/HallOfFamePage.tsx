import PageDivider from "@/components/Page/PageDivider";
import HallOfFameDisplaySection from "./components/HallOfFameDisplaySection";
import HallOfFameIntroSection from "./components/HallOfFameIntroSection";

export default function HallOfFamePage() {
  return (
    <>
      <HallOfFameDisplaySection />
      <PageDivider theme="light" />
      <HallOfFameIntroSection />
      <PageDivider theme="light" />
    </>
  );
}
