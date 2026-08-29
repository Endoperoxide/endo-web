import { ReactNode } from "react";
import TextBox from "../TextBox";
import CornerPlus from "../CornerPlus";
import EyebrowTitle from "../EyebrowTitle";

type Properties = {
  title: string;
  description: string;
  eyebrow?: string;
  children?: ReactNode;
};

export default function PageIntroSection({
  title,
  description,
  eyebrow,
  children,
}: Properties) {
  return (
    <section className="relative flex flex-col bg-background-highlight content-padding-horizontal">
      <CornerPlus color="text-text-primary" />
      <EyebrowTitle title={title} eyebrow={eyebrow ?? "test"} />

      <div className="flex flex-col gap-8 py-5 md:px-10 md:py-12 lg:flex-row">
        {/* Children */}
        <div className="order-first mx-auto w-full shrink-0 lg:order-last lg:w-[48%]">
          {children}
        </div>

        {/* Text */}
        <div className="flex-1">
          <TextBox variant="muted">
            <p className="text-text-primary">{description}</p>
          </TextBox>
        </div>
      </div>
    </section>
  );
}
