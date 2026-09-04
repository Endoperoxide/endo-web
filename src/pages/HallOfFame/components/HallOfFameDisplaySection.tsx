import PageDisplaySection from "@/components/Page/PageDisplaySection";
import fayeConfused from "@/assets/Faye/faye_confused.png";
import BackgroundDisplayTitle from "@/components/Background/BackgroundDisplayTitle";

export default function HallOfFameDisplaySection() {
  return (
    <PageDisplaySection>
      <img
        src={fayeConfused}
        alt=""
        fetchPriority="low"
        className="pointer-events-none absolute object-cover bottom-0 left-1/2 -translate-x-1/2 z-2 h-full"
      />
      {/* Title */}
      <BackgroundDisplayTitle title="Hall of fame" />
    </PageDisplaySection>
  );
}
