import { Gallery } from "../../components/Gallery/Gallery";
import { InfoMessage } from "../../components/InfoMessage/InfoMessage";
import { useAppSelector } from "../../store/hooks";
import { selectFavorites } from "../../store/slices/favoritesSlice";
import styles from "./FavoritesPage.module.scss";

export const FavoritesPage = () => {
  const favorites = useAppSelector(selectFavorites);

  if (favorites.length === 0) {
    return (
      <div className={styles.infoWrapper}>
        <InfoMessage text="Вы еще не выбрали любимых котиков. Сделайте это в галерее)" />
      </div>
    );
  }

  return <Gallery cats={favorites} />;
};
