import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  fetchCatsThunk,
  selectCats,
  selectCatsError,
  selectCatsLoading,
} from "../../store/slices/catsSlice";
import { SkeletonLoader } from "../../components/SkeletonLoader/SkeletonLoader";
import { ErrorSnackbar } from "../../components/ErrorSnackbar/ErrorSnackbar";
import { Gallery } from "../../components/Gallery/Gallery";

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
      <Gallery cats={cats} />
      <ErrorSnackbar error={error} />
    </>
  );
};
