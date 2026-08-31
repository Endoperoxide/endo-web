import PageIntroSection from "@/components/Page/PageIntroSection";
import TextBox from "@/components/TextBox";

const PARAGRAPHS = [
  `This website started due to burnout I've had from other projects,
  which was intended to be a stand-alone reviews website. And while this remains true,
  now it exists mostly as a hub of all my creative works such as Drawing, Writing and Coding projects. `,

  `This website started due to burnout I've had from other projects,
  which was intended to be a stand-alone reviews website. And while this remains true,
  now it exists mostly as a hub of all my creative works such as Drawing, Writing and Coding projects.`,

  `This website started due to burnout I've had from other projects,
  which was intended to be a stand-alone reviews website. And while this remains true,
  now it exists mostly as a hub of all my creative works such as Drawing, Writing and Coding projects.`,
];

export default function ReviewsPageIntroSection() {
  return (
    <PageIntroSection title="About" eyebrow="test">
      {/* Text */}
      <div className="flex-1">
        <TextBox variant="muted">
          <div className="flex flex-col gap-4">
            {PARAGRAPHS.map((paragraph, index) => (
              <p
                key={index}
                className="w-full max-w-none text-[1rem] leading-relaxed text-text-primary md:max-w-[46ch]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </TextBox>
      </div>
    </PageIntroSection>
  );
}
