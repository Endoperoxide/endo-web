import ParallaxImage from "@/components/ParallaxImage/ParallaxImage";
import GameShowcase from "@/components/GameShowcase/GameShowcase";
import fayeWindows from "@/assets/Faye/faye_windows.png";
import { FAYE_MAIN } from "@/utils/parallax_utils";
import { podiumGames } from "@/utils/podium_utils";
import TriangleBackground from "@/components/TriangleBackground";

export default function HomePageDisplaySection() {
  return (
    <section className="relative flex flex-col w-full bg-black h-[calc(100svh-var(--navbar-height))]">
      {/* Main Display */}
      <div className="relative flex-1 overflow-hidden">
        {/* Game Showcase */}
        <TriangleBackground />
        {/* <GameShowcase games={podiumGames} autoPlay fill objectFit="cover" /> */}

        <div
          className="pointer-events-none absolute inset-0 z-1"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.55) 100%)",
          }}
        />
        <div className="pointer-events-none absolute inset-0 z-2 flex items-end justify-center">
          <ParallaxImage layers={FAYE_MAIN} />
        </div>
      </div>
      {/* Bottom strip */}
      <div className="relative h-15 w-full overflow-hidden bg-background-highlight" />
    </section>
  );
}
