import { useRef, useState } from "react";

/**
 * Drives play/pause off hover when `enabled` is true (i.e. autoPlay is off).
 * When `enabled` is false, the video is expected to autoplay on its own
 * (handled by the caller), and this hook just exposes a no-op hovered state.
 */
export function useHoverToPlay(enabled: boolean) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);

  const handleEnter = () => {
    if (!enabled) return;
    setHovered(true);
    videoRef.current?.play().catch(() => {});
  };

  const handleLeave = () => {
    if (!enabled) return;
    setHovered(false);
    const el = videoRef.current;
    if (el) {
      el.pause();
      el.currentTime = 0;
    }
  };

  return { videoRef, hovered, handleEnter, handleLeave };
}
