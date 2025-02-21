import { useLayoutEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

// config
import { config } from "../../config";

// buttons
import { AllButton } from "./buttons/button-bar/AllButton";
import { NewsButton } from "./buttons/button-bar/NewsButton";
import { MoviesButton } from "./buttons/button-bar/MoviesButton";
import { GamesButton } from "./buttons/button-bar/GamesButton";
import { MusicButton } from "./buttons/button-bar/MusicButton";
import { BooksButton } from "./buttons/button-bar/BooksButton";

const buttonClick = new Audio("/click.wav");
buttonClick.volume = 0.5;

interface ButtonPanelProps {
  date: Date;
  filters: string[];
  onChange: (filters: string[]) => void;
  sidebarOpen: boolean;
  toggleSidebar: (value?: boolean) => void;
}

export const ButtonPanel = ({
  date,
  filters,
  onChange,
  sidebarOpen,
  toggleSidebar,
}: ButtonPanelProps) => {
  const addFilterSelection = (filter: string) => {
    onChange([...filters, filter]);
  };

  const removeFilterSelection = (filter: string) => {
    onChange(filters.filter((item) => item !== filter));
  };

  const toggleFilterNone = () => {
    config.enableAudio && buttonClick.play();
    onChange([]);
  };

  const toggleFilterSelection = (filter: string) => {
    config.enableAudio && buttonClick.play();
    if (filters.includes(filter)) {
      removeFilterSelection(filter);
    } else {
      addFilterSelection(filter);
    }
  };

  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth < 1024) {
        toggleSidebar(true);
      } else {
        toggleSidebar(false);
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="button-panel">
      <div className="button-panel-top">
        <div
          className="button-panel-base-button lg:hidden"
          data-tooltip-id="tooltip-root"
          data-tooltip-html="<b>Toggle Sidebar</b>"
          data-tooltip-place="right"
          data-tooltip-offset={15}
          data-tooltip-delay-show={500}
          onClick={() => toggleSidebar()}
        >
          <div className="content">
            {sidebarOpen ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </div>
        </div>
      </div>
      <div
        data-tooltip-id="tooltip-root"
        data-tooltip-html="<b>Show All</b>"
        data-tooltip-place="right"
        data-tooltip-offset={15}
        data-tooltip-delay-show={500}
      >
        <AllButton
          onClick={() => toggleFilterNone()}
          active={!filters.length}
        />
      </div>
      <div
        data-tooltip-id="tooltip-root"
        data-tooltip-html="<b>Show Movies</b>"
        data-tooltip-place="right"
        data-tooltip-offset={15}
        data-tooltip-delay-show={500}
      >
        <MoviesButton
          onClick={() => toggleFilterSelection("movies")}
          active={filters.includes("movies")}
        />
      </div>
      <div
        data-tooltip-id="tooltip-root"
        data-tooltip-html="<b>Show Movies</b>"
        data-tooltip-place="right"
        data-tooltip-offset={15}
        data-tooltip-delay-show={500}
      >
        <BooksButton
          onClick={() => toggleFilterSelection("novels")}
          active={filters.includes("novels")}
        />
      </div>
      <div
        data-tooltip-id="tooltip-root"
        data-tooltip-html="<b>Show News</b>"
        data-tooltip-place="right"
        data-tooltip-offset={15}
        data-tooltip-delay-show={500}
      >
        <NewsButton
          disabled={date.getFullYear() > 2009}
          onClick={() => toggleFilterSelection("news")}
          active={filters.includes("news")}
        />
      </div>
      <div
        data-tooltip-id="tooltip-root"
        data-tooltip-html="<b>Show Games</b>"
        data-tooltip-place="right"
        data-tooltip-offset={15}
        data-tooltip-delay-show={500}
      >
        <GamesButton
          onClick={() => toggleFilterSelection("games")}
          active={filters.includes("games")}
        />
      </div>
      <div
        data-tooltip-id="tooltip-root"
        data-tooltip-html="<b>Show Albums</b>"
        data-tooltip-place="right"
        data-tooltip-offset={15}
        data-tooltip-delay-show={500}
      >
        <MusicButton
          onClick={() => toggleFilterSelection("music")}
          active={filters.includes("music")}
        />
      </div>
      <div className="button-panel-bottom">
        <div
          className="button-panel-base-button lg:hidden"
          data-tooltip-id="tooltip-root"
          data-tooltip-html="<b>Show Help</b>"
          data-tooltip-place="right"
          data-tooltip-offset={15}
          data-tooltip-delay-show={500}
        >
          <div className="content">
            <svg
              className="size-6/12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              {
                "<!-- !Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->"
              }
              <path d="M80 160c0-35.3 28.7-64 64-64l32 0c35.3 0 64 28.7 64 64l0 3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74l0 1.4c0 17.7 14.3 32 32 32s32-14.3 32-32l0-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7l0-3.6c0-70.7-57.3-128-128-128l-32 0C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
