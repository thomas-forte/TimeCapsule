import { BookSection } from "./sections/BookSection";

// import { MovieCard } from "./cards/MovieCard";
// import { BookCard } from "./cards/BookCard";
// import { NewsCard } from "./cards/NewsCard";
// import { GameCard } from "./cards/GameCard";
// import { MusicCard } from "./cards/MusicCard";
import { MovieSection } from "./sections/MovieSection";

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
      className="h-dvh max-w-full overflow-y-hidden content-container flex"
      style={{ backgroundImage }}
    >
      {(!filters.length || filters.includes("movies")) && (
        <BookSection date={date} decade={decade} />
      )}
      {(!filters.length || filters.includes("books")) && (
        <MovieSection date={date} decade={decade} />
      )}
      {/* {(!filters.length || filters.includes("news")) && ( */}
      {/* <NewsCard date={date} decade={decade} /> */}
      {/* )} */}
      {/* {(!filters.length || filters.includes("games")) && ( */}
      {/* <GameCard date={date} decade={decade} /> */}
      {/* )} */}
      {/* {(!filters.length || filters.includes("music")) && ( */}
      {/* <MusicCard date={date} decade={decade} /> */}
      {/* )} */}
    </div>
  );
};
