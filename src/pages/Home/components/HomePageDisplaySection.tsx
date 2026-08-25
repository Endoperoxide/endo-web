import TriangleBackground from "@/components/TriangleBackground";
import fayeStand from "@/assets/Faye/faye_stand.png";
import marathonText from "@/assets/Vector/marathon_text.svg";

export default function HomePageDisplaySection() {
  return (
    <section className="relative flex flex-col w-full bg-black h-[calc(100svh-var(--navbar-height))]">
      {/* Main Display */}
      <div className="relative flex-1 overflow-hidden">
        {/* Game Showcase */}
        <TriangleBackground autoScroll autoScrollSpeed={100} />
        <div
          className="pointer-events-none absolute inset-0 z-1"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.55) 100%)",
          }}
        />

        {/* Static image test */}
        <img
          src={fayeStand}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute object-cover bottom-0 left-1/2 -translate-x-1/2 z-2 h-full"
        />

        {/* Inverted text */}
        {/* <span className="pointer-events-none absolute inset-0 z-3 flex items-end justify-center mix-blend-difference p-4 @container-size">
          <span
            className="font-mono font-bold text-text-accent whitespace-nowrap leading-none"
            style={{ fontSize: "calc(85cqh / 12)" }}
          >
            ENDOPEROXIDE
          </span>
        </span> */}
      </div>

      {/* Bottom strip */}
      <div className="relative md:hidden p-3 h-15 w-full overflow-hidden bg-background-highlight flex items-center justify-center">
        <img
          src={marathonText}
          alt=""
          aria-hidden="true"
          className="h-full w-auto max-w-full object-contain invert"
        />
      </div>
    </section>
  );
}
