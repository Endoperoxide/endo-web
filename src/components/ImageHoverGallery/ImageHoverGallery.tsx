import { useProximityExpand } from "@/components/ImageHoverGallery/hooks/useProximityExpand";

export type ImageHoverGalleryProps = {
  images: { src: string; alt?: string }[];
  onSelect?: (index: number) => void;
};

export default function ImageHoverGallery({
  images,
  onSelect,
}: ImageHoverGalleryProps) {
  const { containerRef, setItemRef } = useProximityExpand({
    itemCount: images.length,
    baseFlex: 1,
    maxFlex: 3,
    smoothing: 0.08,
  });

  return (
    <div ref={containerRef} className="flex h-full w-full flex-row gap-3">
      {images.map((image, index) => {
        return (
          <div
            key={image.src}
            ref={setItemRef(index)}
            role={onSelect ? "button" : undefined}
            tabIndex={onSelect ? 0 : undefined}
            onClick={onSelect ? () => onSelect(index) : undefined}
            onKeyDown={
              onSelect
                ? (e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onSelect(index);
                    }
                  }
                : undefined
            }
            style={{ flex: 1 }}
            className={`relative h-full overflow-hidden rounded-med ${
              onSelect ? "cursor-pointer" : ""
            }`}
          >
            <img
              src={image.src}
              alt={image.alt ?? ""}
              className="h-full w-full object-cover"
            />
          </div>
        );
      })}
    </div>
  );
}
