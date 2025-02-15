import { useEffect, useState } from "react";

import { Section, SectionProps } from "./Section";
import { Card } from "./Card";
import { ZoomDialog } from "../ZoomDialog";

import { config } from "../../config";
import movies from "../../assets/movies.json";

type Movie = {
  awards: { url: string; tooltip: string } | null;
  title: string;
  title_inline?: Record<string, string>;
  studio: {
    url: string;
    tooltip: string;
    inline_styles?: Record<string, string>;
  }[];
  mpaa: { url: string; tooltip: string } | null;
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

  const remainingDirectors = (directors: string[]): JSX.Element => {
    if (directors.length > 3) {
      return (
        <>
          {directors.slice(0, 3).join(", ")}
          <br />
          {remainingDirectors(directors.slice(3))}
        </>
      );
    } else {
      return <>{directors.join(", ")}</>;
    }
  };

  return (
    movie && (
      <Section name="movies">
        <Card decade={decade} className="w-2/5">
          <div className="top-text">Movie of {date.getFullYear()}:</div>
          {movie.awards && (
            <div className="flex flex-wrap justify-center mt-[2dvh] mx-[2dvw]">
              <img
                className="max-h-[8dvh]"
                src={config.assetsRoot + movie.awards.url}
                alt={movie.awards.tooltip}
                title={movie.awards.tooltip}
              />
            </div>
          )}
          <div
            className={`title-text header-font-${decade}`}
            style={movie.title_inline}
          >
            {movie.title}
          </div>
          <p className="subtitle-text">
            Directed by: {movie.directors.slice(0, 2).join(", ")}
            <br />
            {remainingDirectors(movie.directors.slice(2))}
          </p>
          <p className="info-text">Runtime: {movie.runtime}</p>
          <p className="subtitle-text">{movie.tagline}</p>
          <div className="flex flex-wrap justify-center mt-[2dvh] gap-[2dvw]">
            {movie.studio.map((studio, index) => (
              <img
                className="max-w-[40%] max-h-[10dvh]"
                style={studio.inline_styles}
                key={movie.title + index}
                src={config.assetsRoot + studio.url}
                alt={studio.tooltip}
                title={studio.tooltip}
              />
            ))}
          </div>
          {movie.mpaa && (
            <div className="flex flex-wrap justify-center mt-[2dvh]">
              <img
                className="max-w-[40%] max-h-[4dvh]"
                src={config.assetsRoot + movie.mpaa.url}
                alt={movie.mpaa.tooltip}
                title={movie.mpaa.tooltip}
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
