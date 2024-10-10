import { Outlet, useLocation } from "react-router-dom";

// styles
import styles from "./Layout.module.css";

// components
import { ControlPanel } from "./ControlPanel";
import { Door } from "../components/Door";

export const Layout = () => {
  const location = useLocation();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.controlPanel}>
          <ControlPanel />
        </div>
        <div className={styles.content}>
          {location.pathname === "/" ? <Door /> : <Outlet />}
        </div>
      </div>
    </>
  );
};
