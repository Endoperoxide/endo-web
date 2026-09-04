import { useEffect, useState } from "react";

export function useBatchedList<T>(items: T[], batchSize = 20) {
  const [visibleCount, setVisibleCount] = useState(batchSize);

  // Reset when the list changes
  useEffect(() => {
    setVisibleCount(batchSize);
  }, [items, batchSize]);

  const visibleItems = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;

  const loadMore = () => {
    setVisibleCount((count) => Math.min(count + batchSize, items.length));
  };

  return { visibleItems, hasMore, loadMore };
}
