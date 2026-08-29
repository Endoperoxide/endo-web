import type { Game } from "@/utils/game_utils";

type Props = {
  games: Game[];
  progress: number;
};

const ITEM_WIDTH = "clamp(90px, 20vw, 180px)";
const NAV_SLOTS = 15;
const NAV_HALF = 7;

export default function ReviewsPageTitleSection({ games, progress }: Props) {
  const count = games.length;
  const floor = Math.floor(progress);

  return (
    <section className="relative h-20 w-full overflow-hidden bg-background-base">
      {count > 0 &&
        Array.from({ length: NAV_SLOTS }, (_, i) => {
          const slot = i - NAV_HALF;
          const virtualIndex = floor + slot;
          if (virtualIndex < 0 || virtualIndex >= count) return null;

          const game = games[virtualIndex];
          const distance = virtualIndex - progress;
          const abs = Math.abs(distance);
          const active = abs < 0.5;

          return (
            <h1
              key={i}
              className={`absolute top-1/2 line-clamp-2 -translate-x-1/2 -translate-y-1/2 pointer-events-none text-center leading-tight transition-[font-size,color] duration-150 ${
                active
                  ? "font-medium text-[18px] tracking-[-0.02em] text-text-accent"
                  : "font-normal text-[14px] tracking-[0.02em] text-text-primary"
              }`}
              style={{
                left: `calc(50% + ${ITEM_WIDTH} * ${distance})`,
                width: `calc(${ITEM_WIDTH} * ${active ? 0.94 : 0.86})`,
                opacity: Math.max(0, 1 - abs * 0.3),
              }}
            >
              {game.title}
            </h1>
          );
        })}
    </section>
  );
}
