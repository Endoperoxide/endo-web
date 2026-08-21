import { useEffect, useRef } from "react";

const PARALLAX_LERP: number = 0.08;
const MAX_OFFSET_PX = 40;

function clamp(n: number, min: number, max: number) {
  return Math.min(Math.max(n, min), max);
}

interface Layer {
  depth: number;
}

export function useParallaxLayers(layers: Layer[]) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    function move(event: MouseEvent) {
      const rect = containerRef.current?.getBoundingClientRect();

      if (!rect) return;

      targetX = (event.clientX - rect.left) / rect.width - 0.5;
      targetY = (event.clientY - rect.top) / rect.height - 0.5;
    }

    window.addEventListener("mousemove", move);

    let raf = 0;

    function animate() {
      currentX += (targetX - currentX) * PARALLAX_LERP;
      currentY += (targetY - currentY) * PARALLAX_LERP;

      imageRefs.current.forEach((img, i) => {
        if (!img) return;

        const depth = layers[i].depth;

        const offsetX = clamp(currentX * depth, -MAX_OFFSET_PX, MAX_OFFSET_PX);
        const offsetY = clamp(currentY * depth, -MAX_OFFSET_PX, MAX_OFFSET_PX);

        img.style.transform = `translate3d(
          ${offsetX}px,
          ${offsetY}px,
          0
        )`;
      });

      raf = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
    };
  }, [layers]);

  return {
    containerRef,
    imageRefs,
  };
}
