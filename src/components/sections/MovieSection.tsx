import { useEffect, useState } from "react";

import { Section, SectionProps } from "./Section";
import { Card } from "./Card";

import { getTopMovie, Movie } from "../../tmdb.service";

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
        <Card decade={decade} className="basis-1/2">
          <div className="text-center">Top Movie The Year You Were Born:</div>
          <div className={`text-center my-[1vw] hf-${decade}`}>
            {movie.title}
          </div>
          <p className="text-justify indent-[5vw] body mb-[1vw]">
            {movie.overview}
          </p>
        </Card>
        <Card decade={decade} className="basis-1/2 poster">
          <img
            src={`https://media.themoviedb.org/t/p/w500//${movie.poster_path}`}
            alt={`${movie.title} poster`}
          />
        </Card>
      </Section>
    )
  );
};
