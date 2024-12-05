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
      <Section>
        <Card decade={decade} className="w-2/5">
          <div className="text-center">Movie The Year:</div>
          <div className={`text-center my-[1vw] hf-${decade}`}>
            {movie.title}
          </div>
          <p className="text-center body mb-[1vw]">{movie.tagline}</p>
          <p className="text-justify body mb-[1vw]">{movie.description}</p>
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
