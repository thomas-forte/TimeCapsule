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
  filters: string[];
  onChange: (filters: string[]) => void;
}

export const ButtonPanel = ({ filters, onChange }: ButtonPanelProps) => {
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
      <div>
        <AllButton
          onClick={() => toggleFilterNone()}
          active={!filters.length}
        />
      </div>
      <div>
        <MoviesButton
          onClick={() => toggleFilterSelection("movies")}
          active={filters.includes("movies")}
        />
      </div>
      <div>
        <BooksButton
          onClick={() => toggleFilterSelection("novels")}
          active={filters.includes("novels")}
        />
      </div>
      <div>
        <NewsButton
          onClick={() => toggleFilterSelection("news")}
          active={filters.includes("news")}
        />
      </div>
      <div>
        <GamesButton
          onClick={() => toggleFilterSelection("games")}
          active={filters.includes("games")}
        />
      </div>
      <div>
        <MusicButton
          onClick={() => toggleFilterSelection("music")}
          active={filters.includes("music")}
        />
      </div>
    </div>
  );
};
