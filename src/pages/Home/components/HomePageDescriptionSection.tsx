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

const reviewLogicParagraphs = [
  `I can appreciate what a game represents and is attempting to accomplish, 
  so I try to review games based on their own merits and intentions, 
  rather than comparing them to other games or my personal preferences.`,

  `I give these games a rating not on the average score of its Category Breakdown, but rather its personal impact on me.`,
];

const categoryBreakdownParagraphs = [
  `I break down each game into six categories: Gameplay, Story, Music, Sound Design, Visual Design and Replayability. 
  However, these are just rudimentary categories, and games do not need to adhere to all of them.`,

  `It becomes easier to dissect them with the added context, and it might help others understand why I rate things the way I do.
  The overall review will still boil down to my overall enjoyment of the game, focusing on what the game is trying to do best,
  rather than looking at it from a perfectionist point of view.`,
];

const hallOfFameParagraphs = [
  `The Hall of Fame is my hand-picked top 10 games that have had the most impact on me and my life.
  To parrot the previous paragraph, a game with exceptional scores in all categories will not automatically 
  count towards my top 10, though it is more likely.`,

  `It may be a game that just meant a lot to me during a 
  certain period of my life,or one that conveyed a mechanic or emotion so well that I had to position 
  it higher than another game that might have a 'better' score.`,
];

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
            paragraphs={reviewLogicParagraphs}
            backgroundImage={portal}
          />

          <DescriptionCard
            eyebrow="Breakdown of common merits"
            title="Category Breakdown"
            secondaryImage={fayeStretch}
            side="left"
            paragraphs={categoryBreakdownParagraphs}
            backgroundImage={wattson}
          />

          <DescriptionCard
            eyebrow="The top 10"
            title="Hall of Fame"
            paragraphs={hallOfFameParagraphs}
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
