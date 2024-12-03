import { useEffect, useState } from "react";

import { Section, SectionProps } from "./Section";
import { Card } from "./Card";

import { config } from "../../config";
import movies from "../../assets/movies.json";

type Movie = {
  title: string;
  studio: string[] | string;
  mpaa: string;
  runtime: string;
  director: string | string[];
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
        <Card decade={decade} className="basis-1/2">
          <div className="text-center">Top Movie The Year You Were Born:</div>
          <div className={`text-center my-[1vw] hf-${decade}`}>
            {movie.title}
          </div>
          <p className="text-justify indent-[5vw] body mb-[1vw]">
            {movie.tagline}
          </p>
        </Card>
        <Card decade={decade} className="basis-1/2 poster">
          <img
            src={config.assetsRoot + movie.image}
            alt={`${movie.title} poster`}
          />
        </Card>
      </Section>
    )
  );
};
