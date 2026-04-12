import { useEffect, useRef } from "react";
import { UseInfiniteScrollProps } from "./types";

export const useInfiniteScroll = ({
  hasMore,
  isLoading,
  onLoadMore,
  threshold = 0.1,
}: UseInfiniteScrollProps) => {
  const loadingTriggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLoading || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [loadingGalleryTrigger] = entries;
        if (loadingGalleryTrigger.isIntersecting && hasMore && !isLoading) {
          onLoadMore();
        }
      },
      { threshold },
    );

    if (loadingTriggerRef.current) {
      observer.observe(loadingTriggerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isLoading, hasMore, onLoadMore, threshold]);

  return loadingTriggerRef;
};
