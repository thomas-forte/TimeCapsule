// styles
import { useState } from "react";
import styles from "./App.module.css";

// components
import { ControlPanel } from "./components/control-panel/ControlPanel";
import { DateDetails } from "./components/DateDetails";
import { Door } from "./components/Door";
import classNames from "classnames";

const doorChimeAudio = new Audio("/doorbell.wav");
const doorCloseAudio = new Audio("/door.wav");

export const App = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [decade, setDecade] = useState("");
  const [filters, setFilters] = useState<string[]>([]);
  const [doorOpen, setDoorOpen] = useState(false);

  const goToDate = (date: Date, filters: string[]) => {
    // close door if open
    doorCloseAudio.play().then(() => {
      // configure decade and filters
      setDate(date);
      setDecade(`${Math.trunc(date.getFullYear() / 10) * 10}s`);
      setFilters(filters);
      // preload date details
    });
    setDoorOpen(false);

    setTimeout(() => {
      // play sound then animate door open
      doorChimeAudio.play().then(() => {
        setDoorOpen(true);
      });
    }, 3000 + 2000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.controlPanel}>
        <ControlPanel goToDate={goToDate} />
      </div>

      <div className={styles.content}>
        <div
          className={classNames(styles.doorContainer, {
            [styles.open]: doorOpen,
            [styles.close]: !doorOpen,
          })}
        >
          {/* {doorClosed &&  */}
          <Door />
        </div>

        <DateDetails date={date} decade={decade} filters={filters} />
      </div>

      {/* turn yo screen */}

      {/* help menu */}
    </div>
  );
};
