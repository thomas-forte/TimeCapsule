import { useEffect, useState } from "react";

import { Section, SectionProps } from "./Section";
import { Card } from "./Card";
import { ZoomDialog } from "../ZoomDialog";

import { config } from "../../config";
import movies from "../../assets/movies.json";

type Movie = {
  awards: string;
  title: string;
  studio: string[];
  mpaa: string;
  runtime: string;
  directors: string[];
  tagline: string;
  description: string;
  image: string;
};

export const MovieSection = ({ date, decade }: SectionProps) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [isOpen, setIsOpen] = useState(false);

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
          <div className="top-text">Movie of {date.getFullYear()}:</div>
          {movie.awards && (
            <div className="flex flex-wrap justify-center mt-[2dvh] mx-[2dvw]">
              <img
                className="max-h-[8dvh]"
                src={config.assetsRoot + movie.awards}
                alt="movie awards image"
              />
            </div>
          )}
          <div className={`title-text header-font-${decade}`}>
            {movie.title}
          </div>
          <p className="subtitle-text">{movie.tagline}</p>
          <div className="flex flex-wrap justify-center mt-[2dvh]">
            {movie.studio.map((studioUrl, index) => (
              <img
                className="max-w-[40%] max-h-[8dvh] m-[3%]"
                key={movie.title + index}
                src={config.assetsRoot + studioUrl}
                alt="movie studio icon"
              />
            ))}
          </div>
          {movie.mpaa && (
            <div className="flex flex-wrap justify-center mt-[2dvh]">
              <img
                className="max-w-[40%] max-h-[4dvh] m-[3%]"
                src={config.assetsRoot + movie.mpaa}
                alt="mpaa rating"
              />
            </div>
          )}
        </Card>
        <Card decade={decade} className="poster">
          <img
            className="movie-poster cursor-zoom-in"
            src={config.assetsRoot + movie.image}
            alt={`${movie.title} poster`}
            onClick={() => setIsOpen(true)}
          />
          <ZoomDialog
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            imgSrc={config.assetsRoot + movie.image}
            imgAlt={`${movie.title} poster`}
          />
        </Card>
      </Section>
    )
  );
};
