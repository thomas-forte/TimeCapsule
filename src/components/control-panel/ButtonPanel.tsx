import { useState } from "react";
import classNames from "classnames";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/20/solid";

// assets
import AllIcon from "../../assets/button-panel-icons/all-icon.svg?react";
import MovieIcon from "../../assets/button-panel-icons/movie-icon.svg?react";
import NovelIcon from "../../assets/button-panel-icons/novel-icon.svg?react";
import NewsIcon from "../../assets/button-panel-icons/news-icon.svg?react";
import GamesIcon from "../../assets/button-panel-icons/games-icon.svg?react";
import AlbumIcon from "../../assets/button-panel-icons/albums-icon.svg?react";

// config
import { config } from "../../config";

const buttonClick = new Audio("/click.wav");
buttonClick.volume = 0.5;

interface ButtonPanelProps {
  date: Date;
  filters: string[];
  setFilters: (filters: string[]) => void;
  sidebarOpen: boolean;
  toggleSidebar: (value?: boolean) => void;
  compactMode: boolean;
}

export const ButtonPanel = ({
  date,
  filters,
  setFilters,
  sidebarOpen,
  toggleSidebar,
  compactMode,
}: ButtonPanelProps) => {
  const [helpOpen, setHelpOpen] = useState(false);

  // filter functions
  const addFilterSelection = (filter: string) => {
    setFilters([...filters, filter]);
  };

  const removeFilterSelection = (filter: string) => {
    setFilters(filters.filter((item) => item !== filter));
  };

  const toggleFilterNone = () => {
    config.enableAudio && buttonClick.play();
    setFilters([]);
  };

  const toggleFilterSelection = (filter: string) => {
    config.enableAudio && buttonClick.play();
    if (filters.includes(filter)) {
      removeFilterSelection(filter);
    } else {
      addFilterSelection(filter);
    }
  };

  return (
    <div className="h-dvh pr-[1dvh] pl-[0.8dvh] button-panel-background">
      <div className="h-dvh flex flex-col items-center justify-evenly">
        <div className="min-h-[15dvh] w-full flex flex-col items-center justify-end">
          <div
            className={classNames("button circle-button min-w-full", {
              active: helpOpen,
              hidden: !compactMode,
            })}
            data-tooltip-id="tooltip-root"
            data-tooltip-html="<b>Toggle Sidebar</b>"
            data-tooltip-place="right"
            data-tooltip-offset={15}
            data-tooltip-delay-show={500}
            onClick={() => toggleSidebar()}
          >
            {sidebarOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </div>
        </div>
        <div
          className={classNames("button square-button button-panel-button", {
            active: !filters.length,
          })}
          data-tooltip-id="tooltip-root"
          data-tooltip-html="<b>Show All</b>"
          data-tooltip-place="right"
          data-tooltip-offset={15}
          data-tooltip-delay-show={500}
          onClick={() => toggleFilterNone()}
        >
          <AllIcon />
        </div>
        <div
          className={classNames("button square-button button-panel-button", {
            active: filters.includes("movies"),
          })}
          data-tooltip-id="tooltip-root"
          data-tooltip-html="<b>Show Movies</b>"
          data-tooltip-place="right"
          data-tooltip-offset={15}
          data-tooltip-delay-show={500}
          onClick={() => toggleFilterSelection("movies")}
        >
          <MovieIcon />
        </div>
        <div
          className={classNames("button square-button button-panel-button", {
            active: filters.includes("novels"),
          })}
          data-tooltip-id="tooltip-root"
          data-tooltip-html="<b>Show Novels</b>"
          data-tooltip-place="right"
          data-tooltip-offset={15}
          data-tooltip-delay-show={500}
          onClick={() => toggleFilterSelection("novels")}
        >
          <NovelIcon />
        </div>
        <div
          className={classNames("button square-button button-panel-button", {
            active: filters.includes("news"),
            disabled: date.getFullYear() > 2009,
          })}
          data-tooltip-id="tooltip-root"
          data-tooltip-html="<b>Show News</b>"
          data-tooltip-place="right"
          data-tooltip-offset={15}
          data-tooltip-delay-show={500}
          onClick={() => toggleFilterSelection("news")}
        >
          <NewsIcon />
        </div>
        <div
          className={classNames("button square-button button-panel-button", {
            active: filters.includes("games"),
          })}
          data-tooltip-id="tooltip-root"
          data-tooltip-html="<b>Show Games</b>"
          data-tooltip-place="right"
          data-tooltip-offset={15}
          data-tooltip-delay-show={500}
          onClick={() => toggleFilterSelection("games")}
        >
          <GamesIcon />
        </div>
        <div
          className={classNames("button square-button button-panel-button", {
            active: filters.includes("music"),
          })}
          data-tooltip-id="tooltip-root"
          data-tooltip-html="<b>Show Albums</b>"
          data-tooltip-place="right"
          data-tooltip-offset={15}
          data-tooltip-delay-show={500}
          onClick={() => toggleFilterSelection("music")}
        >
          <AlbumIcon />
        </div>
        <div className="min-h-[15dvh] w-full flex flex-col items-center justify-end">
          <div
            className={classNames("button circle-button min-w-full", {
              active: helpOpen,
            })}
            data-tooltip-id="tooltip-root"
            data-tooltip-html="<b>Show Help</b>"
            data-tooltip-place="right"
            data-tooltip-offset={15}
            data-tooltip-delay-show={500}
            onClick={() => setHelpOpen(!helpOpen)}
          >
            <QuestionMarkCircleIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
