import { useState } from "react";

// styles
import styles from "./ButtonPanel.module.css";

// buttons
import { AllButton } from "../components/buttons/AllButton";
import { NewsButton } from "../components/buttons/NewsButton";
import { MoviesButton } from "../components/buttons/MoviesButton";
import { GamesButton } from "../components/buttons/GamesButton";
import { MusicButton } from "../components/buttons/MusicButton";
import { BooksButton } from "../components/buttons/BooksButton";

export const ButtonPanel = () => {
  const [filterSelection, setFilterSelection] = useState<string[]>([]);

  const addFilterSelection = (filter: string) => {
    if (!filterSelection.includes(filter)) {
      setFilterSelection([...filterSelection, filter]);
    }
  };

  return (
    <div className={styles.buttonPanel}>
      <div>
        <AllButton
          onClick={() => setFilterSelection([])}
          active={!filterSelection.length}
        />
      </div>
      <div>
        <MoviesButton
          onClick={() => addFilterSelection("movies")}
          active={filterSelection.includes("movies")}
        />
      </div>
      <div>
        <BooksButton
          onClick={() => addFilterSelection("books")}
          active={filterSelection.includes("books")}
        />
      </div>
      <div>
        <NewsButton
          onClick={() => addFilterSelection("news")}
          active={filterSelection.includes("news")}
        />
      </div>
      <div>
        <GamesButton
          onClick={() => addFilterSelection("games")}
          active={filterSelection.includes("games")}
        />
      </div>
      <div>
        <MusicButton
          onClick={() => addFilterSelection("music")}
          active={filterSelection.includes("music")}
        />
      </div>
    </div>
  );
};
