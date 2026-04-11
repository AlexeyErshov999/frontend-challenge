import { Link } from "react-router-dom";
import styles from "./NavigationTab.module.scss";
import cn from "classnames";

interface INavigationTabProps {
  title: string;
  to: string;
  isActive: boolean;
}

export const NavigationTab = ({ title, to, isActive }: INavigationTabProps) => {
  return (
    <Link to={to} className={cn(styles.tab, { [styles.active]: isActive })}>
      {title}
    </Link>
  );
};
