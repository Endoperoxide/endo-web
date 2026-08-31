import { useProximityExpand } from "@/components/ImageHoverGallery/hooks/useProximityExpand";
import GameCoverArt from "@/components/Game/GameCoverArt";
import type { Game } from "@/utils/game_utils";

export type ImageHoverGalleryProps = {
  games: Game[];
  onSelect?: (index: number) => void;
};

export default function ImageHoverGallery({
  games,
  onSelect,
}: ImageHoverGalleryProps) {
  const { containerRef, setItemRef } = useProximityExpand({
    itemCount: games.length,
    baseFlex: 1,
    maxFlex: 3,
    smoothing: 0.08,
  });

  return (
    <div ref={containerRef} className="flex h-full w-full flex-row gap-3">
      {games.map((game, index) => {
        return (
          <div
            key={game.slug}
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
              className="block h-full w-full object-cover"
              src={game.coverUrl}
            />
          </div>
        );
      })}
    </div>
  );
}
