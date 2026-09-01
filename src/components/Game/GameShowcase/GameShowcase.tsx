import type { PodiumGame } from "@/utils/podium_utils";
import GameVideo from "@/components/Game/GameVideo/GameVideo";
import { useHoverToPlay } from "@/components/Game/GameShowcase/hooks/useHoverToPlay";
import { useActiveGame } from "@/components/Game/GameShowcase/hooks/useActiveGame";
import GameCoverArt from "@/components/Game/GameCoverArt";
import GameRating from "@/components/Game/GameRating";
import GameTitle from "@/components/Game/GameTitle";

type Props = {
  games: PodiumGame[];
  autoPlay?: boolean;
  objectFit?: "contain" | "cover" | "fill";
  objectPosition?: string;
  fill?: boolean;
  onClick?: () => void;
};

export default function GameShowcase({
  games,
  autoPlay = false,
  objectFit = "cover",
  objectPosition = "center",
  fill = false,
  onClick,
}: Props) {
  const { videoRef, hovered, handleEnter, handleLeave } =
    useHoverToPlay(!autoPlay);
  const { clips, activeGame, setActiveIndex } = useActiveGame(games);
  const poster = activeGame?.coverUrl;
  const interactive = Boolean(onClick);

  return (
    <div
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      onClick={onClick}
      onKeyDown={
        interactive
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") onClick?.();
            }
          : undefined
      }
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        height: fill ? "100%" : undefined,
        aspectRatio: fill ? undefined : "16/9",
        boxShadow: interactive && hovered ? "var(--shadow-hover)" : "none",
        transform: interactive && hovered ? "translateY(-3px)" : "none",
      }}
      className={`relative block w-full overflow-hidden bg-black transition-[border-color,box-shadow,transform] duration-200 ${
        interactive ? "cursor-pointer" : "cursor-default"
      }`}
    >
      {/* Video */}
      <div className="absolute inset-0">
        <GameVideo
          ref={videoRef}
          clips={clips}
          poster={poster}
          autoPlay={autoPlay}
          objectFit={objectFit}
          objectPosition={objectPosition}
          onIndexChange={setActiveIndex}
        />
      </div>

      {/* Shadow gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 42%, rgba(0,0,0,0.12) 68%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      {activeGame && (
        <div
          key={activeGame.slug}
          className="hidden sm:block absolute inset-x-0 bottom-0 px-[clamp(14px,2.4vw,24px)] pb-[clamp(12px,2.2vw,20px)]"
        >
          <div className="flex min-w-0 items-end gap-4">
            {/* Cover art */}
            <div
              className="relative aspect-2/3 shrink-0 overflow-hidden rounded bg-black shadow-[0_4px_14px_rgba(0,0,0,0.5)]"
              style={{ width: "clamp(50px, 8vw, 100px)" }}
            >
              <GameCoverArt game={activeGame} />
            </div>

            {/* Rating stacked above title */}
            <div className="flex min-w-0 flex-col justify-start gap-2">
              <GameRating game={activeGame} />
              <GameTitle game={activeGame} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
