import type { Game } from "@/utils/game_utils";

type Props = {
  games: Game[];
  progress: number;
};

// Scales with viewport so titles don't get shoved off-screen on narrow layouts.
const ITEM_WIDTH = "clamp(90px, 20vw, 180px)";
const NAV_SLOTS = 15;
const NAV_HALF = 7;

export default function ReviewsPageTitleSection({ games, progress }: Props) {
  const count = games.length;
  const floor = Math.floor(progress);

  return (
    <section
      style={
        {
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          "--item-width": ITEM_WIDTH,
        } as React.CSSProperties
      }
      className="relative h-22.5 w-full overflow-hidden bg-background-main"
    >
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
            <div
              key={i}
              title={game.title}
              className={`absolute top-1/2 line-clamp-2 -translate-x-1/2 -translate-y-1/2 pointer-events-none font-body text-center leading-tight transition-[font-size,color] duration-150 ${
                active
                  ? "font-medium text-[18px] tracking-[-0.02em] text-text-primary"
                  : "font-normal text-[14px] tracking-[0.02em] text-text-muted"
              }`}
              style={{
                left: `calc(50% + var(--item-width) * ${distance})`,
                width: `calc(var(--item-width) * ${active ? 0.94 : 0.86})`,
                opacity: Math.max(0, 1 - abs * 0.3),
              }}
            >
              {game.title}
            </div>
          );
        })}
    </section>
  );
}
