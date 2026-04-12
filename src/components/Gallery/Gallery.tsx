import { ICatImage } from "../../types/cats.types";
import { CatCard } from "../CatCard/CatCard";
import styles from "./Gallery.module.scss";

interface IGalleryProps {
  cats: ICatImage[];
}

// В консоль падают ошибки о совпадении id у некоторых пришедших котиков
// Поэтому сделал составной ключ
export const Gallery = ({ cats }: IGalleryProps) => {
  return (
    <>
      <div className={styles.gallery}>
        {cats.map((cat, i) => (
          <CatCard key={`${cat.id}-${i}`} {...cat} />
        ))}
      </div>
    </>
  );
};
