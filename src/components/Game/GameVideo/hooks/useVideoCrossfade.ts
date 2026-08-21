import { useEffect, useImperativeHandle, useRef, useState } from "react";

type Properties = {
  clips: string[];
  autoPlay?: boolean;
  onIndexChange?: (index: number) => void;
  ref?: React.Ref<HTMLVideoElement>;
};

export function useVideoCrossfade({
  clips,
  autoPlay = true,
  onIndexChange,
  ref,
}: Properties) {
  const videoRefA = useRef<HTMLVideoElement>(null);
  const videoRefB = useRef<HTMLVideoElement>(null);

  const [index, setIndex] = useState(0);
  const [activeSlot, setActiveSlot] = useState<"A" | "B">("A");

  const activeRef = activeSlot === "A" ? videoRefA : videoRefB;
  const standbyRef = activeSlot === "A" ? videoRefB : videoRefA;

  const singleClip = clips.length === 1;
  const nextIndex = (index + 1) % clips.length;

  useImperativeHandle(ref, () => activeRef.current as HTMLVideoElement);

  useEffect(() => {
    if (singleClip) return;
    const standby = standbyRef.current;
    if (standby) {
      standby.src = clips[nextIndex];
      standby.load();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextIndex, singleClip, activeSlot]);

  // Reset whenever the clip list itself changes.
  useEffect(() => {
    setIndex(0);
    setActiveSlot("A");
    if (videoRefA.current) {
      videoRefA.current.src = clips[0];
      videoRefA.current.load();
      if (autoPlay) videoRefA.current.play().catch(() => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clips.join("|")]);

  useEffect(() => {
    onIndexChange?.(index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  function handleEnded() {
    if (singleClip) return;
    const standby = standbyRef.current;
    if (standby) {
      standby.currentTime = 0;
      standby.play().catch(() => {});
    }
    setActiveSlot((s) => (s === "A" ? "B" : "A"));
    setIndex(nextIndex);
  }

  return { videoRefA, videoRefB, activeSlot, singleClip, handleEnded };
}
