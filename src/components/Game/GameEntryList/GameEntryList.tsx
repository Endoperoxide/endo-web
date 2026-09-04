import type { Game } from "@/utils/game_utils";
import GameEntry from "@/components/Game/GameEntryList/components/GameEntry";
import InfiniteScrollSentinel from "@/components/Game/GameEntryList/components/InfiniteScrollSentinel";
import { useBatchedList } from "@/components/Game/GameEntryList/hooks/useBatchedList";
import fayeConfusedTop from "@/assets/Faye/faye_confused_top.png";
import PageDivider from "@/components/Page/PageDivider";

const GAME_BATCH_SIZE: number = 20;

type Props = {
  games: Game[];
};

export default function GameEntryList({ games }: Props) {
  if (!games.length) return <EmptyState />;
  return <FullState games={games} />;
}

function FullState({ games }: Props) {
  const { visibleItems, hasMore, loadMore } = useBatchedList(
    games,
    GAME_BATCH_SIZE,
  );

  return (
    <div className="flex flex-col">
      {visibleItems.map((game) => (
        <div key={game.slug}>
          <GameEntry game={game} />
          <PageDivider theme="dark" padded={false} />
        </div>
      ))}
      <InfiniteScrollSentinel onIntersect={loadMore} enabled={hasMore} />
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5">
      <p className="text-center text-xs tracking-widest text-text-muted">
        No games found!
        <br />
        Some games might not have been
        <br />
        reviewed by me yet!
      </p>

      <img src={fayeConfusedTop} alt="Faye Confused" fetchPriority="low" />
    </div>
  );
}
