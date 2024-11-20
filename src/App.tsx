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
  const [initialLoad, setInitialLoad] = useState(true);
  const [date, setDate] = useState<Date>();
  const [decade, setDecade] = useState("");
  const [filters, setFilters] = useState<string[]>([]);
  const [doorOpen, setDoorOpen] = useState(false);

  const goToDate = (date: Date, filters: string[]) => {
    let initialTimeout = 1;

    // close door if open and not initial load
    if (!initialLoad) {
      doorCloseAudio.play();
      setDoorOpen(false);
      initialTimeout = 3000;
    }

    // wait for door to fully close then set date details
    setTimeout(() => {
      setDate(date);
      setDecade(`${Math.trunc(date.getFullYear() / 10) * 10}s`);
      setFilters(filters);
    }, initialTimeout);

    // play sound floor chime then animate door open 2s after door closes
    setTimeout(() => {
      doorChimeAudio.play();
      setDoorOpen(true);
      if (initialLoad) {
        setInitialLoad(false);
      }
    }, initialTimeout + 2000);
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
            [styles.close]: !doorOpen && !initialLoad,
          })}
        >
          <Door />
        </div>

        <DateDetails
          date={date ?? new Date()}
          decade={decade}
          filters={filters}
        />
      </div>

      {/* turn yo screen */}

      {/* help menu */}
    </div>
  );
};
