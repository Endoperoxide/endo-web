import PageDisplaySection from "@/components/Page/PageDisplaySection";
import BackgroundRings from "@/components/Background/BackgroundRings";
import BackgroundDisplayTitle from "@/components/Background/BackgroundDisplayTitle";

export default function ReviewsPageDisplaySection() {
  return (
    <PageDisplaySection>
      {/* Rings */}
      <BackgroundRings />

      {/* Title */}
      <BackgroundDisplayTitle title="Reviews" />
    </PageDisplaySection>
  );
}
