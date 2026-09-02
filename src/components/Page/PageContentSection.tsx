import { ReactNode } from "react";
import PageTitle from "./PageTitle";
import BackgroundStripes from "../Background/BackgroundStripes";

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
        <div className="flex flex-row items-center">
          <PageTitle
            title={title}
            eyebrow={eyebrow}
            eyebrowColor={eyebrowColor}
          />
          {theme === "light" && <BackgroundStripes className="ml-6" />}
        </div>

        {/* Children */}
        <div className="min-h-0 w-full flex-1">{children}</div>
      </div>
    </section>
  );
}
