import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  fetchCatsThunk,
  selectCats,
  selectCatsError,
  selectCatsLoading,
} from "../../store/slices/catsSlice";
import styles from "./GalleryPage.module.scss";

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
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error...</h1>;
  }

  return (
    <div className={styles.gallery}>
      {cats.map((cat) => (
        <img
          key={cat.id}
          src={cat.url}
          alt={"Изображение котика"}
          className={styles.card}
        />
      ))}
    </div>
  );
};
