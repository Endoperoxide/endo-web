import PageContentSection from "@/components/Page/PageContentSection";
import marathonTest from "@/assets/marathon_test_img.png";
import { ImageContentContainer } from "@/components/ContentContainer/ImageContentContainer";
import TextContentContainer from "@/components/ContentContainer/TextContentContainer";

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
      <div className="flex flex-col gap-3 md:flex-row">
        {/* Image column */}
        <div className="flex flex-3 flex-col">
          <ImageContentContainer title="Faye" image={marathonTest} />
        </div>

        {/* Text column */}
        <div className="flex flex-2 flex-col">
          <TextContentContainer title="Description" paragraphs={PARAGRAPHS} />
        </div>
      </div>
    </PageContentSection>
  );
}
