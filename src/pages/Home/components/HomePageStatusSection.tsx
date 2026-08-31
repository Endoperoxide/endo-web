import PageContentSection from "@/components/Page/PageContentSection";
import { THOUGHTS_STATUS, MUSIC_STATUS_URL } from "@/utils/status_utils";
import marathonTest from "@/assets/marathon_test_img.png";
import TextContentContainer from "@/components/ContentContainer/TextContentContainer";
import { EmbedContentContainer } from "@/components/ContentContainer/EmbedContentContainer";
import { ImageContentContainer } from "@/components/ContentContainer/ImageContentContainer";

export default function HomePageStatusSection() {
  return (
    <PageContentSection theme="dark" title="Status" eyebrow="Random stuff">
      <div className="flex flex-col gap-3 md:flex-row">
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
      </div>
    </PageContentSection>
  );
}
