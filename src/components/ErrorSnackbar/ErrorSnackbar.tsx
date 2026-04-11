import styles from "./ErrorSnackbar.module.scss";

interface IErrorSnackbarProps {
  error: string | null;
}

export const ErrorSnackbar = ({ error }: IErrorSnackbarProps) => {
  if (!error) return null;

  return (
    <div className={styles.snackbar}>
      <p className={styles.message}>{error}</p>
    </div>
  );
};
