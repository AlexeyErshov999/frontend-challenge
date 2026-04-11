import styles from "./SkeletonLoader.module.scss";

export const SkeletonLoader = () => {
  return (
    <div className={styles.skeletonGrid}>
      {[...Array(15)].map((_, i) => (
        <div key={i} className={styles.skeletonCard}>
          <div className={styles.skeletonImage}></div>
        </div>
      ))}
    </div>
  );
};