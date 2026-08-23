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
    <div ref={containerRef} className="relative h-full">
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
          fetchPriority="low"
          className={`pointer-events-none h-full w-auto max-w-full select-none object-cover object-bottom will-change-transform ${
            i === 0 ? "" : "absolute inset-0"
          }`}
        />
      ))}
    </div>
  );
}
