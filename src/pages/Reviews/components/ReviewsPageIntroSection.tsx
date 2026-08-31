import PageContentSection from "@/components/Page/PageContentSection";
import marathonTest from "@/assets/marathon_test_img.png";
import { ImageContentContainer } from "@/components/ContentContainer/ImageContentContainer";
import TextContentContainer from "@/components/ContentContainer/TextContentContainer";

const PARAGRAPHS = [
  `This website started due to burnout I've had from other projects,
  which was intended to be a stand-alone reviews website. And while this remains true,
  now it exists mostly as a hub of all my creative works such as Drawing, Writing and Coding projects. `,

  `This website started due to burnout I've had from other projects,
  which was intended to be a stand-alone reviews website. And while this remains true,
  now it exists mostly as a hub of all my creative works such as Drawing, Writing and Coding projects.`,
];

export default function ReviewsPageIntroSection() {
  return (
    <PageContentSection theme="light" title="About" eyebrow="test">
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
