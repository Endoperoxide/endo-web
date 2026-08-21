import { useProximityExpand } from "@/pages/HallOfFame/hooks/useProximityExpand";

import GameCoverArt from "@/components/Game/GameCoverArt";
import GameShowcase from "@/components/GameShowcase/GameShowcase";

import type { PodiumGame } from "@/utils/podium_utils";
import type { Game } from "@/utils/game_utils";

export type GameHoverGalleryProps = {
  games: PodiumGame[];
  onSelect: (game: Game) => void;
};

export default function GameHoverGallery({
  games,
  onSelect,
}: GameHoverGalleryProps) {
  const { containerRef, setItemRef, activeIndex } = useProximityExpand({
    itemCount: games.length,
    baseFlex: 1,
    maxFlex: 3,
    activeFlex: 6,
    smoothing: 0.08,
  });

  const podiumIndex = Math.floor(games.length / 2);

  return (
    <div
      ref={containerRef}
      className="flex h-[60vh] w-full max-h-200 flex-row items-end gap-4"
    >
      {games.map((game, index) => {
        const isActive = index === activeIndex;
        const isPodium = index === podiumIndex;

        return (
          <div
            key={game.game.title}
            ref={setItemRef(index)}
            role="button"
            tabIndex={0}
            onClick={() => onSelect(game.game)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelect(game.game);
              }
            }}
            style={{
              flex: 1,
            }}
            className={`relative cursor-pointer overflow-hidden rounded-med transition-[height] duration-300 ease-in-out ${
              isPodium ? "h-full" : "h-[88%]"
            }`}
          >
            {isActive && game.clipUrl?.length ? (
              <GameShowcase
                games={[game]}
                autoPlay
                fill
                objectFit="cover"
                objectPosition="center"
              />
            ) : (
              <GameCoverArt game={game.game} />
            )}
          </div>
        );
      })}
    </div>
  );
}
