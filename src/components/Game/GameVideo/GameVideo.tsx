import { useVideoCrossfade } from "@/components/Game/GameVideo/hooks/useVideoCrossfade";

type Properties = {
  clips: string[];
  objectFit: "contain" | "cover" | "fill";
  objectPosition: string;
  autoPlay?: boolean;
  poster?: string;
  onIndexChange?: (index: number) => void;
  ref?: React.Ref<HTMLVideoElement>;
};

export default function GameVideo({
  clips,
  objectFit,
  objectPosition,
  autoPlay = true,
  poster,
  onIndexChange,
  ref,
}: Properties) {
  const { videoRefA, videoRefB, activeSlot, singleClip, handleEnded } =
    useVideoCrossfade({
      clips,
      autoPlay,
      onIndexChange,
      ref,
    });

  return (
    <>
      {/* Main video, plays clips[0], loops in place when theres only one clip */}
      <video
        ref={videoRefA}
        src={clips[0]}
        poster={poster}
        autoPlay={autoPlay}
        muted
        playsInline
        loop={singleClip}
        onEnded={activeSlot === "A" ? handleEnded : undefined}
        className={`pointer-events-none absolute inset-0 h-full w-full transition-opacity ${
          activeSlot === "A" ? "opacity-100" : "opacity-0"
        }`}
        style={{ objectFit, objectPosition }}
      />

      {/* Buffer for crossfading to the next clip, only for multiple clips */}
      {!singleClip && (
        <video
          ref={videoRefB}
          muted
          playsInline
          onEnded={activeSlot === "B" ? handleEnded : undefined}
          className={`pointer-events-none absolute inset-0 h-full w-full transition-opacity ${
            activeSlot === "B" ? "opacity-100" : "opacity-0"
          }`}
          style={{ objectFit, objectPosition }}
        />
      )}
    </>
  );
}
