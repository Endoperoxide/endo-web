import PageDisplaySection from "@/components/Page/PageDisplaySection";
import fayeStand from "@/assets/Faye/faye_stand_no_sphere.png";
import titleName from "@/assets/Vector/title_name.svg";
import BackgroundRings from "@/components/Background/BackgroundRings";

export default function HomePageDisplaySection() {
  return (
    <PageDisplaySection>
      {/* Rings */}
      <BackgroundRings />

      {/* Gradient */}
      <div
        className="pointer-events-none absolute inset-0 z-1"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* Main image */}
      <img
        src={fayeStand}
        alt="Faye"
        aria-hidden="true"
        className="pointer-events-none absolute object-cover bottom-0 left-1/2 -translate-x-1/2 z-2 h-full"
      />

      <img
        src={titleName}
        alt="title"
        aria-hidden="true"
        className="mix-blend-exclusion pointer-events-none absolute object-contain z-2 top-4 left-1/2 -translate-x-1/2 w-[90%] h-auto sm:top-auto sm:bottom-4 sm:left-4 sm:translate-x-0 sm:w-auto sm:h-60"
      />
    </PageDisplaySection>
  );
}
