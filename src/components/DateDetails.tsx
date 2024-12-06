import classNames from "classnames";

import { NovelSection } from "./sections/NovelSection";
import { MovieSection } from "./sections/MovieSection";
import { NewsSection } from "./sections/NewsSection";
import { GamesSection } from "./sections/GamesSection";
import { MusicSection } from "./sections/MusicSection";

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
    <div
      className={classNames(
        "h-dvh max-w-full overflow-y-hidden content-container flex",
        `body-font-${decade}`
      )}
      style={{ backgroundImage }}
    >
      {(!filters.length || filters.includes("books")) && (
        <MovieSection date={date} decade={decade} />
      )}
      {(!filters.length || filters.includes("movies")) && (
        <NovelSection date={date} decade={decade} />
      )}
      {(!filters.length || filters.includes("news")) && (
        <NewsSection date={date} decade={decade} />
      )}
      {(!filters.length || filters.includes("games")) && (
        <GamesSection date={date} decade={decade} />
      )}
      {(!filters.length || filters.includes("music")) && (
        <MusicSection date={date} decade={decade} />
      )}
    </div>
  );
};
