import PageDisplaySection from "@/components/Page/PageDisplaySection";
import GameShowcase from "@/components/GameShowcase/GameShowcase";
import { podiumGames } from "@/utils/podium_utils";

export default function ReviewsPageDisplaySection() {
  return (
    <PageDisplaySection>
      <GameShowcase
        games={podiumGames}
        objectFit="cover"
        autoPlay={true}
        fill={true}
      />
    </PageDisplaySection>
  );
}
