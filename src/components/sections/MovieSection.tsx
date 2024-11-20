import { useEffect, useState } from "react";
import classNames from "classnames";

import { Section, SectionProps } from "./Section";
import { getTopMovie, Movie } from "../../tmdb.service";

import styles from "./Section.module.css";

export const MovieSection = ({ date, decade }: SectionProps) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  useEffect(() => {
    async function fetchData() {
      const movie = await getTopMovie(date);
      if (typeof movie !== "string") {
        setMovie(movie);
      }
    }
    fetchData();
  }, [date]);

  return (
    movie && (
      <Section>
        <div
          className={classNames(
            styles.sectionCard,
            styles.movieOne,
            decade ? `bg-${decade} bd-${decade}` : "bg-yellow-300"
          )}
        >
          <div className={`text-center bf-${decade}`}>
            Top Movie The Year You Were Born:
          </div>
          <div className={`text-center my-[1vw] hf-${decade}`}>
            {movie.title}
          </div>
          <p className={`text-justify indent-[5vw] bf-${decade} body mb-[1vw]`}>
            {movie.overview}
          </p>
        </div>
        <div
          className={classNames(
            styles.sectionCard,
            styles.movieTwo,
            decade ? `bg-${decade} bd-${decade}` : "bg-yellow-300"
          )}
        >
          <img
            className={styles.moviePoster}
            src={`https://media.themoviedb.org/t/p/w500//${movie.poster_path}`}
            alt=""
          />
        </div>
      </Section>
    )
  );
};
