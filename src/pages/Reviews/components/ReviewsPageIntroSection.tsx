import PageContentSection from "@/components/Page/PageContentSection";
import { podiumGames } from "@/utils/podium_utils";
import TextContentContainer from "@/components/ContentContainer/TextContentContainer";
import { PAGES } from "@/utils/page_utils";
import SubHeader from "@/components/ContentContainer/components/SubHeader";
import GameShowcase from "@/components/Game/GameShowcase/GameShowcase";
import pattern from "@/assets/Vector/pattern.svg";

const PARAGRAPHS = [
  `
  This page contains (almost) all of the games I have played throughout my life, and I try to write a review for each of them based on their own merits and intentions, 
  rather than comparing them to other games or my personal preferences.
  `,

  `
  However, I may have a personal attachment to a game that makes it stand out, or it might have conveyed a mechanic or emotion so well that I had to position 
  it higher than another game that might have a "better" score.
  `,

  `
  I give each game a score in specific categories, although these are mostly rudimentary, and games do not necessarily need to adhere to all of them. 
  They make it easier to dissect each game with additional context, and may help others understand why I rate things the way I do.
  `,
];

export default function ReviewsPageIntroSection() {
  return (
    <PageContentSection
      theme="light"
      title="Game Reviews"
      eyebrow="Repository of game reviews"
    >
      <div className="flex flex-col md:flex-row gap-3">
        {/* Image column */}
        <div className="flex-4">
          <div className="flex flex-col">
            <div className="flex-1 border-3 border-white">
              <SubHeader title="Hall of Fame" />
              <GameShowcase
                games={podiumGames}
                objectFit="cover"
                autoPlay={true}
              />
              <a
                href={`${PAGES.hallOfFame.path}`}
                className="font-body bg-white h-15 flex items-center border-t-3 border-border-white justify-start pl-4 text-text-dark hover:text-text-primary hover:bg-background-main"
              >
                {`>> Hall of Fame <<`}
              </a>
            </div>
            <img className="py-5" src={pattern} />
          </div>
        </div>

        {/* Text column */}
        <div className="flex flex-2">
          <TextContentContainer title="Description" paragraphs={PARAGRAPHS} />
        </div>
      </div>
    </PageContentSection>
  );
}
