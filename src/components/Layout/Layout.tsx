import { Outlet, useLocation } from "react-router-dom";
import { TABS, TActiveTab } from "./types";
import { NavigationTab } from "../NavigationTab/NavigationTab";
import styles from "./Layout.module.scss";

export const Layout = () => {
  const location = useLocation();

  const getActiveTab = (): TActiveTab => {
    if (location.pathname === "/favorites") {
      return TABS.FAVORITES;
    }
    return TABS.GALLERY;
  };

  const activeTab = getActiveTab();

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <NavigationTab
          title={TABS.GALLERY}
          to="/"
          isActive={activeTab === TABS.GALLERY}
        />
        <NavigationTab
          title={TABS.FAVORITES}
          to="/favorites"
          isActive={activeTab === TABS.FAVORITES}
        />
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
