import { useState } from "react";

// styles
import styles from "./ControlPanel.module.css";

// components
import { ControlPanelBackground } from "./ControlPanelBackground";
import { DatePicker } from "../components/DatePicker";
import { GoButton } from "../components/buttons/GoButton";
import { NamePlate } from "../components/NamePlate";
import { RandomButton } from "../components/buttons/RandomButton";
import { useNavigate } from "react-router-dom";

// buttons
import { ButtonPanel } from "./ButtonPanel";

const MIN_DATE = new Date(1950, 0, 1);
const MAX_DATE = new Date();

export const ControlPanel = () => {
  const [date, setDate] = useState(new Date(1955, 10, 5));
  // const [filterSelection, setFilterSelection] = useState("all");
  const navigate = useNavigate();

  const updateDate = (date: Date) => {
    setDate(date);
  };

  const goToSelectedDate = () => {
    doorChime.play().then(() => {
      navigate(generatePath(date));
    });
  };

  const generatePath = (date: Date) => {
    return `/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  };

  const pickRandomDate = () => {
    const randomTime =
      MIN_DATE.getTime() +
      Math.random() * (MAX_DATE.getTime() - MIN_DATE.getTime());
    updateDate(new Date(randomTime));
  };

  const doorChime = new Audio("doorbell.wav");

  return (
    <>
      <div className={styles.controlPanel}>
        <div className={styles.mainPanel}>
          <div className={styles.namePlate}>
            <NamePlate />
          </div>
          <div className={styles.goButton}>
            <GoButton onClick={() => goToSelectedDate()} />
          </div>
          <div className={styles.datePicker}>
            <DatePicker date={date} updateDate={updateDate} />
          </div>
          <div className={styles.randomButton}>
            <RandomButton onClick={() => pickRandomDate()} />
          </div>
        </div>
        <div className={styles.buttonPanel}>
          <ButtonPanel />
        </div>
      </div>
      <ControlPanelBackground />
    </>
  );
};
