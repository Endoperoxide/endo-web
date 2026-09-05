import PageContentSection from "@/components/Page/PageContentSection";
import { ImageContentContainer } from "@/components/ContentContainer/ImageContentContainer";
import TextContentContainer from "@/components/ContentContainer/TextContentContainer";
import fayeFiredUp from "@/assets/Faye/faye_fired_up.png";

const PARAGRAPHS = [
  `This site was initially intended to be a repository of my game reviews, something to do whilst I was burnt out from other projects, 
  but it has since evolved into a hub for all my creative works, including drawing, writing, and coding projects.`,

  `As of right now, the site is still a work in progress, and I am actively working on adding more content and features to it.
  Be sure to check back often for updates, and welcome to my small pet project!`,
];

export default function HomePageIntroSection() {
  return (
    <PageContentSection
      theme="light"
      title="About this site"
      eyebrow="What kind of awesome is this?"
    >
      <div className="flex flex-col gap-3 md:flex-row">
        {/* Image column */}
        <div className="flex flex-3">
          <img className="w-full object-cover" src={fayeFiredUp} alt={"Faye"} />
        </div>

        {/* Text column */}
        <div className="flex flex-2">
          <TextContentContainer title="Description" paragraphs={PARAGRAPHS} />
        </div>
      </div>
    </PageContentSection>
  );
}
