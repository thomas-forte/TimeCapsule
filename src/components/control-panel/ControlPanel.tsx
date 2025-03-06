import { useState } from "react";
import classNames from "classnames";

// assets
import ArrowIcon from "../../assets/control-panel-icons/arrow-icon.svg?react";
import DieIcon from "../../assets/control-panel-icons/die-icon.svg?react";

// components
import { NamePlate } from "./NamePlate";
import { DatePicker } from "./DatePicker";
import { ButtonPanel } from "./ButtonPanel";

// config
import { config } from "../../config";

// types
import { Filters } from "../../types/filters.type";

// styles
import styles from "./ControlPanel.module.css";

interface ControlPanelProps {
  goToDate: (date: Date, filters: Filters[]) => void;
  compactMode: boolean;
  sidebarOpen: boolean;
  toggleSidebar: (value?: boolean) => void;
}

export const ControlPanel = ({
  goToDate,
  compactMode,
  sidebarOpen,
  toggleSidebar,
}: ControlPanelProps) => {
  // filter selection state
  const [filterSelection, setFilterSelection] = useState<Filters[]>([]);

  // selected date state
  const [date, setDate] = useState(
    config.initialDates[Math.floor(Math.random() * config.initialDates.length)]
  );

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
        <div
          className={classNames("flex flex-col p-[5%]", styles.background, {
            hidden: !sidebarOpen,
          })}
        >
          <div className="mt-[4dvh] max-w-[70%] mx-auto">
            <NamePlate />
          </div>

          <div
            className="mt-[2dvh] max-w-[40%] mx-auto"
            data-tooltip-id="tooltip-root"
            data-tooltip-html="<b>Go!</b>"
            data-tooltip-place="right"
            data-tooltip-delay-show={1500}
          >
            <div
              className={classNames(
                "button circle-button p-[25%]",
                styles.goButtonAnimation
              )}
              onClick={() => goToDate(date, filterSelection)}
            >
              <ArrowIcon />
            </div>
          </div>

          <div className="mt-[2dvh] max-w-[75%] mx-auto">
            <DatePicker date={date} updateDate={setDate} />
          </div>

          <div
            className="mt-[2dvh] max-w-[30%] mx-auto"
            data-tooltip-id="tooltip-root"
            data-tooltip-html="<b>Pick a random date</b>"
            data-tooltip-place="right"
            data-tooltip-delay-show={1500}
          >
            <div
              className="button square-button"
              onClick={() => pickRandomDate()}
            >
              <DieIcon />
            </div>
          </div>
        </div>

        <div className="button-panel-container">
          <ButtonPanel
            date={date}
            filters={filterSelection}
            setFilters={setFilterSelection}
            sidebarOpen={sidebarOpen}
            toggleSidebar={toggleSidebar}
            compactMode={compactMode}
          />
        </div>
      </div>
    </>
  );
};
