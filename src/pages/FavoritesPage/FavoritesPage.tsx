import { Gallery } from "../../components/Gallery/Gallery";
import { useAppSelector } from "../../store/hooks";
import { selectFavorites } from "../../store/slices/favoritesSlice";
import styles from "./FavoritesPage.module.scss";

export const FavoritesPage = () => {
  const favorites = useAppSelector(selectFavorites);

  if (favorites.length === 0) {
    return <div className={styles.empty}>Нет любимых котиков 😿</div>;
  }

  return <Gallery cats={favorites} />;
};
