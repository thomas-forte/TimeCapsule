import { useEffect, useState } from "react";

import { Section, SectionProps } from "./Section";
import { Card } from "./Card";

import { config } from "../../config";
import movies from "../../assets/movies.json";

type Movie = {
  title: string;
  studio: string[];
  mpaa: string;
  runtime: string;
  director: string[];
  tagline: string;
  description: string;
  image: string;
};

export const MovieSection = ({ date, decade }: SectionProps) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  useEffect(() => {
    try {
      const movie = (movies as { [key: string]: Movie })[
        date.getFullYear().toString()
      ];
      setMovie(movie);
    } catch {
      setMovie(null);
    }
  }, [date]);

  return (
    movie && (
      <Section name="movies">
        <Card decade={decade} className="w-2/5">
          <div className="top-text">Movie The Year:</div>
          <div className={`title-text header-font-${decade}`}>
            {movie.title}
          </div>
          <p className="subtitle-text">{movie.tagline}</p>
          <p className="body-text">{movie.description}</p>
        </Card>
        <Card decade={decade} className="poster">
          <img
            src={config.assetsRoot + movie.image}
            alt={`${movie.title} poster`}
          />
        </Card>
      </Section>
    )
  );
};
