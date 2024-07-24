import { DateCard } from "./DateCard";
import { MovieCard } from "./MovieCard";
import { BookCard } from "./BookCard";

interface DateViewerProps {
  date: Date;
}

export const DateViewer = ({ date }: DateViewerProps) => {
  // XXXXs
  const decade = `${Math.trunc(date.getFullYear() / 10) * 10}s`;

  return (
    <>
      <div
        className="flex flex-col items-center bg-cover min-h-full"
        style={{ backgroundImage: `url(/images/${decade}bg.svg)` }}
      >
        <DateCard date={date} decade={decade} />
        <MovieCard date={date} decade={decade} />
        <BookCard date={date} decade={decade} />
      </div>
    </>
  );
};
