import styles from "./DateDetails.module.css";

import { MovieCard } from "./cards/MovieCard";
import { BookCard } from "./cards/BookCard";
import { NewsCard } from "./cards/NewsCard";
import { GameCard } from "./cards/GameCard";
import { MusicCard } from "./cards/MusicCard";

interface DateDetailsProps {
  date: Date;
  decade: string;
  filters: string[];
}

export const DateDetails = ({ date, decade, filters }: DateDetailsProps) => {
  let backgroundImage = "";
  if (date.getFullYear() < 2010) {
    backgroundImage = `url(/images/${decade}bg.svg)`;
  } else if (date.getFullYear() < 2020) {
    backgroundImage = "radial-gradient(#DBD2CB 40%, #CCBDB6 60%)";
  } else {
    backgroundImage = "linear-gradient(#665533, #665533)";
  }

  return (
    <div className={styles.container} style={{ backgroundImage }}>
      {(!filters.length || filters.includes("movies")) && (
        <MovieCard date={date} decade={decade} />
      )}
      {(!filters.length || filters.includes("books")) && (
        <BookCard date={date} decade={decade} />
      )}
      {(!filters.length || filters.includes("news")) && (
        <NewsCard date={date} decade={decade} />
      )}
      {(!filters.length || filters.includes("games")) && (
        <GameCard date={date} decade={decade} />
      )}
      {(!filters.length || filters.includes("music")) && (
        <MusicCard date={date} decade={decade} />
      )}
    </div>
  );
};
