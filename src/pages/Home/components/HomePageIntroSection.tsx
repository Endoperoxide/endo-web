import PageContentSection from "@/components/Page/PageContentSection";
import SubHeader from "@/components/SubHeader";
import marathonTest from "@/assets/marathon_test_img.png";

const PARAGRAPHS = [
  `This website started due to burnout I've had from other projects,
  which was intended to be a stand-alone reviews website. And while this remains true,
  now it exists mostly as a hub of all my creative works such as Drawing, Writing and Coding projects. `,

  `This website started due to burnout I've had from other projects,
  which was intended to be a stand-alone reviews website. And while this remains true,
  now it exists mostly as a hub of all my creative works such as Drawing, Writing and Coding projects.`,
];

export default function HomePageIntroSection() {
  return (
    <PageContentSection theme="light" title="About" eyebrow="test">
      <div className="flex flex-col gap-3 md:flex-row">
        {/* Image column */}
        <div className="flex flex-3 flex-col">
          <SubHeader title="Faye" />
          <img className="w-full object-cover" src={marathonTest} alt="" />
        </div>

        {/* Text column */}
        <div className="flex flex-2 flex-col">
          <SubHeader title="Description" />
          <div className="flex flex-col gap-4 p-2">
            {PARAGRAPHS.map((paragraph, index) => (
              <p
                key={index}
                className="w-full max-w-none text-[1rem] leading-6 text-text-primary"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </PageContentSection>
  );
}
