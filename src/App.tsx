import { useRef, useState } from "react";
import classNames from "classnames";

// config
import { config } from "./config";

// styles
import styles from "./App.module.css";

// components
import { ControlPanel } from "./components/control-panel/ControlPanel";
import { DateDetails, DateDetailsRef } from "./components/DateDetails";
import { Door } from "./components/Door";
import { HelpScreen } from "./components/HelpDialog";
import { RotateDialog } from "./components/RotateDialog";

const doorChimeAudio = new Audio("/doorbell.wav");
const doorCloseAudio = new Audio("/door.wav");

export const App = () => {
  const dateDetailsRef = useRef<DateDetailsRef | null>(null);

  const [initialLoad, setInitialLoad] = useState(true);
  const [doorOpen, setDoorOpen] = useState(false);

  const [date, setDate] = useState<Date>(new Date());
  const [decade, setDecade] = useState("");
  const [filters, setFilters] = useState<string[]>([]);

  // callback to change the app state to a new date
  const goToDate = (date: Date, filters: string[]) => {
    let initialTimeout = 1;

    // close door if open and not initial load
    if (!initialLoad) {
      config.enableAudio && doorCloseAudio.play();
      setDoorOpen(false);
      initialTimeout = config.doorClosingDuration;
    }

    // wait for door to fully close then set date details
    setTimeout(() => {
      setDate(date);
      setDecade(`${Math.trunc(date.getFullYear() / 10) * 10}s`);
      setFilters(filters);
      dateDetailsRef.current?.scrollToBeginning();
    }, initialTimeout);

    // play sound floor chime then animate door open 2s after door closes
    setTimeout(() => {
      config.enableAudio && doorChimeAudio.play();
      setDoorOpen(true);
      if (initialLoad) {
        setInitialLoad(false);
      }
    }, initialTimeout + config.doorOpeningDuration);
  };

  return (
    <div className="h-dvh w-dvw">
      <div className="fixed top-0 left-0 h-dvh w-1/5 overflow-hidden z-40">
        <ControlPanel goToDate={goToDate} />
      </div>

      <div className="fixed top-0 left-1/5 h-dvh w-4/5 overflow-hidden z-0">
        <div
          className={classNames(styles.doorContainer, {
            [styles.open]: doorOpen,
            [styles.close]: !doorOpen && !initialLoad,
          })}
        >
          <Door />
        </div>

        <DateDetails
          ref={dateDetailsRef}
          date={date}
          decade={decade}
          filters={filters}
        />
      </div>

      {/* turn yo screen */}
      <RotateDialog />

      {/* help menu */}
      <HelpScreen />
    </div>
  );
};
