import { useLoaderData } from "react-router-dom";

import styles from "./DatePage.module.css";

import { DateCard } from "../components/cards/DateCard";
import { MovieCard } from "../components/cards/MovieCard";
import { BookCard } from "../components/cards/BookCard";
import { NewsCard } from "../components/cards/NewsCard";
import { GameCard } from "../components/cards/GameCard";

export const DatePage = () => {
  const { date } = useLoaderData() as { date: Date };
  const decade = `${Math.trunc(date.getFullYear() / 10) * 10}s`;
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(/images/${decade}bg.svg)` }}
    >
      <DateCard date={date} decade={decade} />
      <MovieCard date={date} decade={decade} />
      <BookCard date={date} decade={decade} />
      <NewsCard date={date} decade={decade} />
      <GameCard date={date} decade={decade} />
    </div>
  );
};
