import { useParallaxLayers } from "@/components/ParallaxImage/hooks/useParallaxLayers";
import {
  FAYE_PARALLAX_LAYERS,
  type ParallaxLayer,
} from "@/utils/parallax_utils";

type Properties = {
  layers?: ParallaxLayer[];
};

export default function ParallaxImage({
  layers = FAYE_PARALLAX_LAYERS,
}: Properties) {
  const { containerRef, imageRefs } = useParallaxLayers(layers);

  return (
    <div
      ref={containerRef}
      className="relative flex h-full w-full items-center justify-start"
    >
      {/* List of all images */}
      {layers.map((layer, i) => (
        <img
          alt="Parallax Layer"
          key={i}
          ref={(element) => {
            if (element) imageRefs.current[i] = element;
          }}
          src={layer.src}
          draggable={false}
          className="pointer-events-none absolute inset-0 h-full w-full select-none object-contain object-left will-change-transform"
        />
      ))}
    </div>
  );
}
