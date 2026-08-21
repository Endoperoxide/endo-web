import { ArrowRight } from "lucide-react";
import { Page } from "@/utils/page_utils";
import EyebrowTitle from "@/components/EyebrowTitle";
import DescriptionCard from "@/pages/Home/components/DescriptionCard";

import wattson from "@/assets/Backgrounds/wattson.jpg";
import expedition from "@/assets/Backgrounds/expedition.jpeg";
import portal from "@/assets/Backgrounds/portal.jpg";

import fayeConfused from "@/assets/Faye/faye_confused_top.png";
import fayeStretch from "@/assets/Faye/faye_stretch.png";
import fayeHeroic from "@/assets/Faye/faye_heroic.png";

export type Properties = {
  onNavigate: (page: Page) => void;
};

export default function HomePageDescriptionSection({ onNavigate }: Properties) {
  return (
    <section>
      <div>
        {/* Title */}
        <EyebrowTitle eyebrow="How it works" title="MY APPROACH" />

        {/* Cards */}
        <div className="flex flex-col">
          <DescriptionCard
            eyebrow="Merit over comparison"
            title="Review Logic"
            secondaryImage={fayeConfused}
            body="I can appreciate what a game represents and is attempting to accomplish, so I try to review games based on their own merits and intentions, rather than comparing them to other games or my personal preferences. I give these games a rating not on the average score of its Category Breakdown, but rather its personal impact on me."
            backgroundImage={portal}
          />

          <DescriptionCard
            eyebrow="Breakdown of common merits"
            title="Category Breakdown"
            secondaryImage={fayeStretch}
            side="left"
            body="I break down each game into six categories: Gameplay, Story, Music, Sound Design, Visual Design and Replayability. However these are just rudimentary categories, and games do not need to adhere to all of them, I just find it easier to disect with the added context, and might help others understand why I rate things the way i do. The overall review will still boil down to my overall enjoyment of the game, and focusing on what the game is trying to do best, rather than looking at it as a perfectionist point of view."
            backgroundImage={wattson}
          />

          <DescriptionCard
            eyebrow="The top 10"
            title="Hall of Fame"
            body="The hall of fame is my hand-picked top 10 games that have had the most impact on me and my life. To parrot the previous paragraph, a game with exceptional scores in all categories will not automatically count it towards my top 10, (though more likely). It may be games that just meant alot to me in a certain period of my life, or just conveyed a mechanic or emotion so well that i had to position it where it higher than what another game might have a *better* score in."
            backgroundImage={expedition}
            secondaryImage={fayeHeroic}
            button={{
              label: "View Hall of Fame",
              onClick: () => onNavigate("hall-of-fame"),
              icon: ArrowRight,
            }}
          />
        </div>
      </div>
    </section>
  );
}
