import { ControlPanelBackground } from "../components/ControlPanelBackground";
import { DatePicker } from "../components/DatePicker";
import { Door } from "../components/Door";
import { GoButton } from "../components/GoButton";
import { NamePlate } from "../components/NamePlate";
import { RandomButton } from "../components/RandomButton";
import styles from "./DemoPage.module.css";

export const DemoPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.controlPanel}>
          <div className={styles.controlPanelFlex}>
            <div className={styles.namePlate}>
              <NamePlate />
            </div>
            <div className={styles.goButton}>
              <GoButton onClick={() => window.alert("That's heavy")} />
            </div>
            <div className={styles.datePicker}>
              <DatePicker />
            </div>
            <div className={styles.randomButton}>
              <RandomButton onClick={() => window.alert("Random date")} />
            </div>
          </div>
        </div>
      </div>
      <Door className={styles.doorPanelBackground} />
      <ControlPanelBackground className={styles.controlPanelBackground} />
    </>
  );
};
