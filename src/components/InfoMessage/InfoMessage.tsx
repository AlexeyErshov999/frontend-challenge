import styles from "./InfoMessage.module.scss";

interface IEmptyStateProps {
  text?: string;
}

export const InfoMessage = ({ text }: IEmptyStateProps) => {
  return (
    <div className={styles.infoMessage}>
      <div className={styles.icon}>🐈</div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
