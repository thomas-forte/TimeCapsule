import { useLoaderData } from "react-router-dom";

import { DateCard } from "../components/DateCard";
import { MovieCard } from "../components/MovieCard";
import { BookCard } from "../components/BookCard";
import { NewsCard } from "../components/NewsCard";
import { VideoGameCard } from "../components/VideoGameCard";

export const DatePage = () => {
  const { date } = useLoaderData() as { date: Date };
  const decade = `${Math.trunc(date.getFullYear() / 10) * 10}s`;
  return (
    <div
      className="flex flex-col items-center min-h-full bg-top"
      style={{ backgroundImage: `url(/images/${decade}bg.svg)` }}
    >
      <DateCard date={date} decade={decade} />
      <MovieCard date={date} decade={decade} />
      <BookCard date={date} decade={decade} />
      <NewsCard date={date} decade={decade} />
      <VideoGameCard date={date} decade={decade} />
    </div>
  );
};
