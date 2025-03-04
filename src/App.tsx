import { useLayoutEffect, useRef, useState } from "react";
import classNames from "classnames";

// config
import { config } from "./config";

// styles
import styles from "./App.module.css";

// components
import { ControlPanel } from "./components/control-panel/ControlPanel";
import { DateDetails, DateDetailsRef } from "./components/DateDetails";
import Door from "./assets/door.svg?react";
import { HelpScreen } from "./components/HelpDialog";
import { Tooltip } from "react-tooltip";

const doorChimeAudio = new Audio("/doorbell.wav");
const doorCloseAudio = new Audio("/door.wav");

export const App = () => {
  const dateDetailsRef = useRef<DateDetailsRef | null>(null);

  const [compactMode, setCompactMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [initialLoad, setInitialLoad] = useState(true);
  const [doorOpen, setDoorOpen] = useState(false);

  const [date, setDate] = useState<Date>(new Date());
  const [decade, setDecade] = useState("");
  const [filters, setFilters] = useState<string[]>([]);

  // callback to change the app state to a new date
  const goToDate = (date: Date, filters: string[]) => {
    let initialTimeout = 1;

    // if compact mode, close sidebar
    if (compactMode) {
      setSidebarOpen(false);
    }

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

  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth < config.sidebarWidth) {
        setCompactMode(true);
      } else {
        setCompactMode(false);
        setSidebarOpen(true);
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const toggleSidebar = (value?: boolean) =>
    value !== undefined ? setSidebarOpen(value) : setSidebarOpen(!sidebarOpen);

  return (
    <div className="h-dvh w-dvw flex">
      <div
        className={classNames(
          "h-dvh w-1/5 min-w-[250px] max-w-[300px] overflow-hidden z-40",
          {
            absolute: compactMode,
          }
        )}
      >
        <ControlPanel
          goToDate={goToDate}
          compactMode={compactMode}
          sidebarOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
        />
      </div>
      {compactMode ? (
        <div className="control-panel-buttons-container"></div>
      ) : null}

      <div className="h-dvh flex-grow overflow-hidden z-0">
        <DateDetails
          ref={dateDetailsRef}
          date={date}
          decade={decade}
          filters={filters}
        />

        <div
          className={classNames(styles.doorContainer, {
            [styles.open]: doorOpen,
            [styles.close]: !doorOpen && !initialLoad,
          })}
        >
          <Door />
        </div>
      </div>

      {/* help menu */}
      <HelpScreen />

      <Tooltip id="tooltip-root" style={{ zIndex: 1000 }} />
    </div>
  );
};
