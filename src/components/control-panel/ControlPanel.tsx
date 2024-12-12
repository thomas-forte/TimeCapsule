import { useState } from "react";

// config
import { config } from "../../config";

// styles
import styles from "./ControlPanel.module.css";

// components
import { NamePlate } from "./NamePlate";
import { GoButton } from "./buttons/GoButton";
import { DatePicker } from "./DatePicker";
import { RandomButton } from "./buttons/RandomButton";
import { ButtonPanel } from "./ButtonPanel";
import { ControlPanelBackground } from "./ControlPanelBackground";

// screws
import { TopLeftScrew } from "./screws/TopLeftScrew";
import { TopRightScrew } from "./screws/TopRightScrew";
import { BottomRightScrew } from "./screws/BottomRightScrew";
import { BottomLeftScrew } from "./screws/BottomLeftScrew";

interface ControlPanelProps {
  goToDate: (date: Date, filters: string[]) => void;
}

export const ControlPanel = ({ goToDate }: ControlPanelProps) => {
  // filter selection state
  const [filterSelection, setFilterSelection] = useState<string[]>([]);

  // selected date state
  const [date, setDate] = useState(config.initialDate);

  // pick a random date between min and max
  const pickRandomDate = () => {
    const randomTime = new Date(
      config.minimumDate.getTime() +
        Math.random() *
          (config.maximumDate.getTime() - config.minimumDate.getTime())
    );
    setDate(randomTime);
  };

  return (
    <>
      <div className="flex">
        {/* controls */}
        <div className="control-panel-controls-container">
          <div className="control-panel-name-plate">
            <NamePlate onClick={() => /*navigate("/")*/ 1} />
          </div>
          <div className="control-panel-go-button">
            <GoButton onClick={() => goToDate(date, filterSelection)} />
          </div>
          <div className="control-panel-date-picker">
            <DatePicker date={date} updateDate={setDate} />
          </div>
          <div className="control-panel-random-button">
            <RandomButton onClick={() => pickRandomDate()} />
          </div>
        </div>

        {/* filter buttons */}
        <div className="control-panel-buttons-container">
          <ButtonPanel
            filters={filterSelection}
            onChange={setFilterSelection}
          />
        </div>

        {/* absolute overlays */}
        <div className={styles.screws}>
          <div className={styles.topLeftScrew}>
            <div className={styles.topLeftGradient}></div>
            <TopLeftScrew />
          </div>
          <div className={styles.topRightScrew}>
            <div className={styles.topRightGradient}></div>
            <TopRightScrew />
          </div>
          <div className={styles.bottomLeftScrew}>
            <div className={styles.bottomLeftGradient}></div>
            <BottomLeftScrew />
          </div>
          <div className={styles.bottomRightScrew}>
            <div className={styles.bottomRightGradient}></div>
            <BottomRightScrew />
          </div>
        </div>
      </div>
      <ControlPanelBackground />
    </>
  );
};
