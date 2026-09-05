import PageDisplaySection from "@/components/Page/PageDisplaySection";
import BackgroundRings from "@/components/Background/BackgroundRings";
import PageDisplayTitle from "@/components/Page/PageDisplayTitle";
import fayePoint from "@/assets/Faye/faye_point.png";

export default function ReviewsPageDisplaySection() {
  return (
    <PageDisplaySection>
      {/* Rings */}
      <BackgroundRings />

      {/* Title */}
      <PageDisplayTitle title="Reviews" />

      {/* Main image */}
      <img
        src={fayePoint}
        alt="Faye"
        aria-hidden="true"
        className="pointer-events-none absolute object-cover bottom-0 left-1/2 -translate-x-1/2 z-2 h-full"
      />
    </PageDisplaySection>
  );
}
