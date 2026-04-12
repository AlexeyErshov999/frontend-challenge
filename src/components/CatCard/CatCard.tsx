import { memo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  addFavorite,
  removeFavorite,
  selectIsFavorite,
} from "../../store/slices/favoritesSlice";
import { ICatImage } from "../../types/cats.types";
import styles from "./CatCard.module.scss";
import heartIcon from "../../assets/icons/heart.svg";
import heartFilledIcon from "../../assets/icons/heart_liked.svg";
import heartHoveredIcon from "../../assets/icons/heart_hovered.svg";

// Использую memo, чтобы не перерисовывать уже отображенные карточки
export const CatCard = memo(({ id, url }: ICatImage) => {
  const dispatch = useAppDispatch();
  const isFavorite = useAppSelector((state) => selectIsFavorite(state, id));
  const [isHovered, setIsHovered] = useState(false);

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite({ id, url }));
    }
  };

  const getHeartIcon = () => {
    if (isFavorite) return heartFilledIcon;
    if (isHovered) return heartHoveredIcon;
    return heartIcon;
  };

  return (
    <div className={styles.card}>
      <img src={url} alt="Изображение котика" className={styles.image} />
      <div className={styles.likeWrapper}>
        <img
          src={getHeartIcon()}
          alt="Лайк"
          className={styles.like}
          onClick={handleLikeClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
    </div>
  );
});
