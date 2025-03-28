import { useLayoutEffect, useRef, useState } from "react";
import classNames from "classnames";
import { Tooltip } from "react-tooltip";

// config
import { config } from "./config";

// assets
import Door from "./assets/door.svg?react";

// styles
import styles from "./App.module.css";

// components
import { ControlPanel } from "./components/control-panel/ControlPanel";
import { DateDetails, DateDetailsRef } from "./components/DateDetails";

// types
import type { Decade } from "./types/decade.type";
import { Filters } from "./types/filters.type";

const doorChimeAudio = new Audio("/doorbell.wav");
const doorCloseAudio = new Audio("/door.wav");

export const App = () => {
  const dateDetailsRef = useRef<DateDetailsRef | null>(null);

  // layout state
  const [compactMode, setCompactMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [initialLoad, setInitialLoad] = useState(true);
  const [doorOpen, setDoorOpen] = useState(false);

  // date options state
  const [date, setDate] = useState<Date>(config.initialDates[0]);
  const [decade, setDecade] = useState<Decade | null>(null);
  const [filters, setFilters] = useState<Filters[]>([]);

  // check for compact mode on window resize
  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth < config.compactModeWidth) {
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

  // toggle sidebar open/close
  const toggleSidebar = (value?: boolean) => {
    if (value === undefined) {
      setSidebarOpen(!sidebarOpen);
    } else {
      setSidebarOpen(value);
    }
  };

  // callback to change the app state to a new date
  const goToDate = (date: Date, filters: Filters[]) => {
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
      setDecade(`${Math.trunc(date.getFullYear() / 10) * 10}s` as Decade);
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

      {/* hidden container to shift page in compact mode */}
      {compactMode ? <div className="button-panel-container" /> : null}

      <div className="h-dvh flex-grow overflow-hidden z-0">
        <DateDetails
          ref={dateDetailsRef}
          compactMode={compactMode}
          date={date}
          decade={decade}
          filters={filters}
        />

        <div
          className={classNames(
            "relative left-0 -top-[100dvh] h-full w-full z-10 overflow-hidden",
            styles.doorContainer,
            {
              [styles.open]: doorOpen,
              [styles.close]: !doorOpen && !initialLoad,
            }
          )}
        >
          <Door />
        </div>
      </div>

      <Tooltip id="tooltip-root" style={{ zIndex: 1000 }} />
    </div>
  );
};
