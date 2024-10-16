import { useState } from "react";
import { useNavigate } from "react-router-dom";

// styles
import styles from "./ControlPanel.module.css";

// components
import { ControlPanelBackground } from "./ControlPanelBackground";
import { DatePicker } from "./DatePicker";
import { NamePlate } from "./NamePlate";
import { ButtonPanel } from "./ButtonPanel";
import { GoButton } from "./buttons/GoButton";
import { RandomButton } from "./buttons/RandomButton";

// screws
import { TopLeftScrew } from "./TopLeftScrew";
import { TopRightScrew } from "./TopRightScrew";

const MIN_DATE = new Date(1950, 0, 1);
const MAX_DATE = new Date();
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
        Math.random() * (MAX_DATE.getTime() - MIN_DATE.getTime())
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
        <div className={styles.buttonPanel}>
          <ButtonPanel
            filters={filterSelection}
            onChange={setFilterSelection}
          />
        </div>
        <div className={styles.topLeftScrew}>
          <TopLeftScrew />
        </div>
        <div className={styles.topRightScrew}>
          <TopRightScrew />
        </div>
      </div>
      <ControlPanelBackground />
    </>
  );
};
