import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  fetchCatsThunk,
  selectCats,
  selectCatsError,
  selectCatsLoading,
} from "../../store/slices/catsSlice";
import styles from "./GalleryPage.module.scss";
import { CatCard } from "../../components/CatCard/CatCard";
import { SkeletonLoader } from "../../components/SkeletonLoader/SkeletonLoader";
import { ErrorSnackbar } from "../../components/ErrorSnackbar/ErrorSnackbar";

export const GalleryPage = () => {
  const dispatch = useAppDispatch();
  const cats = useAppSelector(selectCats);
  const loading = useAppSelector(selectCatsLoading);
  const error = useAppSelector(selectCatsError);

  useEffect(() => {
    if (cats.length === 0 && !loading) {
      dispatch(fetchCatsThunk(0));
    }
  }, []);

  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <>
      <div className={styles.gallery}>
        {cats.map((cat) => (
          <CatCard key={cat.id} {...cat} />
        ))}
      </div>
      <ErrorSnackbar error={error} />
    </>
  );
};
