import { ReactNode } from "react";
import PlusDivider from "../PlusDivider";
import EyebrowTitle from "../EyebrowTitle";

type Properties = {
  title: string;
  eyebrow?: string;
  children?: ReactNode;
};

export default function PageIntroSection({
  title,
  eyebrow,
  children,
}: Properties) {
  return (
    <section className="relative min-h-100 bg-background-highlight">
      {/* Left: all existing content */}
      <div className="flex flex-1 flex-col">
        <PlusDivider color="text-text-primary" />
        <EyebrowTitle title={title} eyebrow={eyebrow ?? "test"} />

        {/* Children */}
        <div className="w-full shrink-0">{children}</div>

        <PlusDivider color="text-text-primary" />
      </div>
    </section>
  );
}
