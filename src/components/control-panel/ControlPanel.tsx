import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

const MIN_DATE = new Date(1950, 0, 1);
const doorChime = new Audio("/doorbell.wav");

export const ControlPanel = () => {
  // filter selection state
  const [filterSelection, setFilterSelection] = useState<string[]>([]);

  // selected date state
  const [date, setDate] = useState(new Date(1955, 10, 5));

  // navigation provider hook
  const navigate = useNavigate();

  // play chime and navigate to selected date
  const goToSelectedDate = () => {
    doorChime.play().then(() => {
      navigate(generatePath(date));
    });
  };

  // generate path with selected date and filters
  const generatePath = (date: Date) => {
    const params = new URLSearchParams();
    if (filterSelection.length) {
      for (const filter of filterSelection) {
        params.append("filters", filter);
      }
    }
    return `/${date.getFullYear()}/${
      date.getMonth() + 1
    }/${date.getDate()}?${params.toString()}`;
  };

  // pick a random date between min and max
  const pickRandomDate = () => {
    const randomTime = new Date(
      MIN_DATE.getTime() +
        Math.random() * (new Date().getTime() - MIN_DATE.getTime())
    );
    setDate(randomTime);
  };

  return (
    <>
      <div className={styles.controlPanel}>
        <div className={styles.mainPanel}>
          <div className={styles.namePlate}>
            <NamePlate onClick={() => navigate("/")} />
          </div>
          <div className={styles.goButton}>
            <GoButton onClick={() => goToSelectedDate()} />
          </div>
          <div className={styles.datePicker}>
            <DatePicker date={date} updateDate={setDate} />
          </div>
          <div className={styles.randomButton}>
            <RandomButton onClick={() => pickRandomDate()} />
          </div>
        </div>

        {/* filter buttons */}
        <div className={styles.buttonPanel}>
          <ButtonPanel
            filters={filterSelection}
            onChange={setFilterSelection}
          />
        </div>

        {/* absolute overlays */}
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
      <ControlPanelBackground />
    </>
  );
};
