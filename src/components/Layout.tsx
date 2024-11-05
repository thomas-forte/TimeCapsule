import { Outlet, useNavigation } from "react-router-dom";

// styles
import styles from "./Layout.module.css";

// components
import { ControlPanel } from "./control-panel/ControlPanel";
import { Door } from "./Door";

export const Layout = () => {
  const navigation = useNavigation();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.controlPanel}>
          <ControlPanel />
        </div>
        <div className={styles.content}>
          {navigation.state !== "idle" && <Door />}

          {navigation.state === "idle" && <Outlet />}
        </div>
      </div>
    </>
  );
};
