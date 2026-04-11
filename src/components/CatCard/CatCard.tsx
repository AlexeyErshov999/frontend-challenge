import { ICatImage } from "../../types/cats.types";
import styles from "./CatCard.module.scss";

export const CatCard = ({ id, url }: ICatImage) => {
  return (
    <img
      key={id}
      src={url}
      alt={"Изображение котика"}
      className={styles.card}
    />
  );
};
