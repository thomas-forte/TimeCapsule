import { useLoaderData } from "react-router-dom";

import styles from "./DatePage.module.css";

import { DateCard } from "../components/cards/DateCard";
import { MovieCard } from "../components/cards/MovieCard";
import { BookCard } from "../components/cards/BookCard";
import { NewsCard } from "../components/cards/NewsCard";
import { GameCard } from "../components/cards/GameCard";

export const DatePage = () => {
  const { date, decade } = useLoaderData() as { date: Date; decade: string };

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
      <DateCard date={date} decade={decade} />
      <MovieCard date={date} decade={decade} />
      <BookCard date={date} decade={decade} />
      <NewsCard date={date} decade={decade} />
      <GameCard date={date} decade={decade} />
    </div>
  );
};
