import { ReactNode } from "react";
import PageTitle from "@/components/Page/PageTitle";
import BackgroundStripes from "@/components/Background/BackgroundStripes";

type Properties = {
  title: string;
  eyebrow: string;
  theme: "light" | "dark";
  children?: ReactNode;
  className?: string;
};

const themeStyles = {
  dark: {
    background: "bg-background-main",
    eyebrowColor: "text-text-accent",
  },
  light: {
    background: "bg-background-highlight",
    eyebrowColor: "text-text-dark",
  },
} as const;

export default function PageContentSection({
  title,
  eyebrow,
  children,
  theme,
  className = "",
}: Properties) {
  const { background, eyebrowColor } = themeStyles[theme];

  return (
    <section className={`relative flex flex-col ${background} ${className}`}>
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="flex flex-row items-center gap-5 mb-5">
          <PageTitle
            title={title}
            eyebrow={eyebrow}
            eyebrowColor={eyebrowColor}
          />
          {theme === "light" && <BackgroundStripes />}
        </div>

        {/* Children */}
        <div className="min-h-0 w-full flex-1">{children}</div>
      </div>
    </section>
  );
}
