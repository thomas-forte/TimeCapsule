import { useState } from "react";
import classNames from "classnames";

// config
import { config } from "../../config";

// components
import { NamePlate } from "./NamePlate";
import { GoButton } from "./buttons/GoButton";
import { DatePicker } from "./DatePicker";
import { RandomButton } from "./buttons/RandomButton";
import { ButtonPanel } from "./ButtonPanel";

interface ControlPanelProps {
  goToDate: (date: Date, filters: string[]) => void;
}

const initialDates = [
  new Date(1955, 10, 5), // 11/5/1955 - The date Marty McFly travels back to in "Back to the Future".
  new Date(1985, 8, 13), // 9/13/1985 - The release date of the original Super Mario Bros. game.
  new Date(1961, 3, 12), // 4/12/1961 - Yuri Gagarin becomes the first human in space.
  new Date(1969, 6, 20), // 7/20/1969 - The Apollo 11 moon landing.
  new Date(1970, 0, 1), // 1/1/1970 - The Unix epoch (the beginning of time for Unix systems).
  new Date(2015, 9, 21), // 10/21/2015 - The future date Marty McFly travels to in "Back to the Future Part II".
  new Date(1997, 7, 29), // 8/29/1997 - The date Skynet becomes self-aware in the Terminator series.
  new Date(2007, 5, 29), // 6/29/2007 - The release date of the first iPhone.
  new Date(2001, 7, 24), // 8/24/2001 - The release date of Windows XP.
];

export const ControlPanel = ({ goToDate }: ControlPanelProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // filter selection state
  const [filterSelection, setFilterSelection] = useState<string[]>([]);

  // selected date state
  const [date, setDate] = useState(
    initialDates[Math.floor(Math.random() * initialDates.length)]
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
          className={classNames("control-panel-controls-container", {
            hidden: sidebarOpen,
          })}
        >
          <div className="control-panel-name-plate">
            <NamePlate onClick={() => /*navigate("/")*/ 1} />
          </div>
          <div
            className="control-panel-go-button"
            data-tooltip-id="tooltip-root"
            data-tooltip-html="<b>Go!</b>"
            data-tooltip-place="right"
            data-tooltip-delay-show={1500}
          >
            <GoButton onClick={() => goToDate(date, filterSelection)} />
          </div>
          <div className="control-panel-date-picker">
            <DatePicker date={date} updateDate={setDate} />
          </div>
          <div
            className="control-panel-random-button"
            data-tooltip-id="tooltip-root"
            data-tooltip-html="<b>Pick a random date</b>"
            data-tooltip-place="right"
            data-tooltip-delay-show={1500}
          >
            <RandomButton onClick={() => pickRandomDate()} />
          </div>
        </div>

        <div className="control-panel-buttons-container">
          <ButtonPanel
            date={date}
            filters={filterSelection}
            onChange={setFilterSelection}
            sidebarOpen={sidebarOpen}
            toggleSidebar={(value?: boolean) =>
              value !== undefined
                ? setSidebarOpen(value)
                : setSidebarOpen(!sidebarOpen)
            }
          />
        </div>
      </div>
    </>
  );

  // return (
  //   <div className="flex">
  //     {/* controls */}

  //   </div>
  // );
};
