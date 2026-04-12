import { ICatImage } from "../../types/cats.types";
import { CatCard } from "../CatCard/CatCard";
import styles from "./Gallery.module.scss";

interface IGalleryProps {
  cats: ICatImage[];
}

export const Gallery = ({ cats }: IGalleryProps) => {
  return (
    <>
      <div className={styles.gallery}>
        {cats.map((cat) => (
          <CatCard key={`${cat.id}`} {...cat} />
        ))}
      </div>
    </>
  );
};
