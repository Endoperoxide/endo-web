import PageContentSection from "@/components/Page/PageContentSection";
import { THOUGHTS_STATUS, MUSIC_STATUS_URL } from "@/utils/status_utils";
import marathonTest from "@/assets/marathon_test_img.png";
import TextContentContainer from "@/components/ContentContainer/TextContentContainer";
import fayeConfusedTop from "@/assets/Faye/faye_confused_top.png";
import { EmbedContentContainer } from "@/components/ContentContainer/EmbedContentContainer";
import { ImageContentContainer } from "@/components/ContentContainer/ImageContentContainer";

const TEMP_PARAGRAPHS: string[] = [
  `Im planning to put stuff here but I'm just so insanely burnt out right now`,

  `Come back later and hopefully this section will be complete with some random stuff`,

  `Soooo yeahhhh`,
];

export default function HomePageStatusSection() {
  return (
    <PageContentSection theme="dark" title="Status" eyebrow="Random stuff">
      <div className="flex flex-col sm:flex-row gap-4">
        <TextContentContainer
          title="Thoughts"
          titleBgColor="bg-background-highlight"
          paragraphs={TEMP_PARAGRAPHS}
        />
        <img
          src={fayeConfusedTop}
          alt=""
          fetchPriority="low"
          className="pointer-events-none object-cover h-full self-center"
        />
      </div>
      {/* <div className="flex flex-col gap-3 md:flex-row">
        <div className="flex flex-2 flex-col">
          <TextContentContainer
            title="Thoughts"
            titleBgColor="bg-background-highlight"
            paragraphs={THOUGHTS_STATUS}
          />

          <EmbedContentContainer
            title="listening to"
            titleBgColor="bg-background-highlight"
            url={MUSIC_STATUS_URL}
          />
        </div>

        <div className="flex flex-3 flex-col">
          <ImageContentContainer
            title="idk"
            titleBgColor="bg-background-highlight"
            image={marathonTest}
          />
        </div>
      </div> */}
    </PageContentSection>
  );
}
