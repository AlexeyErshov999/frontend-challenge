import { ICatImage } from "../../types/cats.types";
import styles from "./CatCard.module.scss";

export const CatCard = ({ id, url }: ICatImage) => {
  return (
    <div key={id} className={styles.card}>
      <img src={url} alt="Изображение котика" />
    </div>
  );
};
