import { ImageContentContainer } from "@/components/ContentContainer/ImageContentContainer";
import PageContentSection from "@/components/Page/PageContentSection";
import TextContentContainer from "@/components/ContentContainer/TextContentContainer";
import underConstruction from "@/assets/under_construction.webp";

const PARAGRAPHS = [
  `This page is not complete! It takes me a while to evaluate my thoughts on all the games i have played! Please bear with me whilst this section is still being made!`,

  `This will likely not be finished until far into the future! There are many games that I have played that I have not yet reviewed, and I will be adding more reviews as time goes on!`,

  `Please be patient with me as I work on this section.`,
];

export default function HallOfFameIntroSection() {
  return (
    <PageContentSection
      theme="light"
      title="Game Reviews"
      eyebrow="Repository of game reviews"
    >
      <div className="flex flex-col gap-3 md:flex-row">
        {/* Image column */}
        <div className="flex flex-3">
          <ImageContentContainer title="Faye" image={underConstruction} />
        </div>

        {/* Text column */}
        <div className="flex flex-2">
          <TextContentContainer title="Description" paragraphs={PARAGRAPHS} />
        </div>
      </div>
    </PageContentSection>
  );
}
