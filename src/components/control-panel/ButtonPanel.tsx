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
}

export const ButtonPanel = ({ date, filters, onChange }: ButtonPanelProps) => {
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

  return (
    <div className="button-panel">
      <div
        data-tooltip-id="tooltip-root"
        data-tooltip-content="Show All"
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
        data-tooltip-content="Show Movies"
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
        data-tooltip-content="Show Movies"
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
        data-tooltip-content="Show News"
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
        data-tooltip-content="Show Games"
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
        data-tooltip-content="Show Albums"
        data-tooltip-place="right"
        data-tooltip-offset={15}
        data-tooltip-delay-show={500}
      >
        <MusicButton
          onClick={() => toggleFilterSelection("music")}
          active={filters.includes("music")}
        />
      </div>
    </div>
  );
};
