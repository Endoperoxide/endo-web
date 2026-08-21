import { useRef, useState } from "react";

type TiltOptions = {
  maxTiltDeg?: number;
};

export function useTilt<T extends HTMLElement>({
  maxTiltDeg = 10,
}: TiltOptions = {}) {
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const ref = useRef<T>(null);

  function handleMouseEnter() {
    setHovered(true);
  }

  function handleMouseLeave() {
    setHovered(false);
    setTilt({ x: 0, y: 0 });
  }

  function handleMouseMove(event: React.MouseEvent<T>) {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();

    // Position of cursor relative to card center
    const positionX = (event.clientX - rect.left) / rect.width;
    const positionY = (event.clientY - rect.top) / rect.height;
    const normalX = positionX * 2 - 1;
    const normalY = positionY * 2 - 1;

    // Tilt away from cursor
    setTilt({
      x: -normalY * maxTiltDeg,
      y: normalX * maxTiltDeg,
    });
  }

  return {
    ref,
    hovered,
    tilt,
    mouseHandlers: {
      onMouseEnter: handleMouseEnter,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
    },
  };
}
