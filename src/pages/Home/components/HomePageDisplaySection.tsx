import ParallaxImage from "@/components/ParallaxImage/ParallaxImage";
import GameShowcase from "@/components/GameShowcase/GameShowcase";
import { NAVBAR_HEIGHT } from "@/components/Navbar/Navbar";
import { podiumGames } from "@/utils/podium_utils";

export default function HomePageDisplaySection() {
  return (
    <section
      style={{ height: `calc(100dvh - ${NAVBAR_HEIGHT})` }}
      className="relative flex w-full bg-black"
    >
      {/* Video — fills completely, no letterboxing */}
      <div className="relative min-w-0 flex-1 overflow-hidden">
        <GameShowcase games={podiumGames} autoPlay fill objectFit="cover" />

        <div
          className="pointer-events-none absolute inset-0 z-1"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.55) 100%)",
          }}
        />

        <div className="pointer-events-none absolute inset-0 z-2 flex flex-col justify-end">
          <div className="relative h-full w-full">
            <div className="pointer-events-none absolute left-1/2 top-0 z-2 h-full -translate-x-1/2 overflow-visible aspect-900/1200">
              <ParallaxImage />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
