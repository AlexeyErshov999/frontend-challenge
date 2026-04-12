import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  fetchCatsThunk,
  selectCats,
  selectCatsError,
  selectCatsLoading,
  selectHasMore,
} from "../../store/slices/catsSlice";
import { SkeletonLoader } from "../../components/SkeletonLoader/SkeletonLoader";
import { ErrorSnackbar } from "../../components/ErrorSnackbar/ErrorSnackbar";
import { Gallery } from "../../components/Gallery/Gallery";
import { InfoMessage } from "../../components/InfoMessage/InfoMessage";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import styles from "./GalleryPage.module.scss";

export const GalleryPage = () => {
  const dispatch = useAppDispatch();
  const cats = useAppSelector(selectCats);
  const loading = useAppSelector(selectCatsLoading);
  const hasMore = useAppSelector(selectHasMore);
  const error = useAppSelector(selectCatsError);

  // Значение сохранится между перерисовками
  // Не кладу страницу в стор, потому что она нужна только странице галереи
  // Сами котики могут пригодиться где-то еще
  const currentPage = useRef(0);
  const isFirstLoading = loading && cats.length === 0;

  useEffect(() => {
    if (cats.length === 0 && !loading) {
      dispatch(fetchCatsThunk(currentPage.current));
    }

    return () => {
      currentPage.current = 0;
    };
  }, []);

  const loadMore = () => {
    if (!loading && hasMore) {
      const nextPage = currentPage.current + 1;
      currentPage.current = nextPage;
      dispatch(fetchCatsThunk(nextPage));
    }
  };

  const loaderRef = useInfiniteScroll({
    hasMore,
    isLoading: loading,
    onLoadMore: loadMore,
  });

  if (isFirstLoading) {
    return <SkeletonLoader />;
  }

  if (cats.length === 0 && !loading) {
    if (error) {
      return <ErrorSnackbar error={error} />;
    }
    return <InfoMessage text="Котики сегодня отдыхают..." />;
  }

  return (
    <>
      <Gallery cats={cats} />
      {hasMore && (
        <div ref={loaderRef} className={styles.trigger}>
          ... загружаем еще котиков ...
        </div>
      )}
      <ErrorSnackbar error={error} />
    </>
  );
};
