import { useEffect, useState } from "react";

// components
import { Section, SectionProps } from "./Section";
import { Card } from "../cards/Card";
import { CardDate } from "../cards/CardDate";
import { CardTitle } from "../cards/CardTitle";
import { CardSubtitle } from "../cards/CardSubtitle";
import { CardInfoText } from "../cards/CardInfoText";
import { CardInlineImages } from "../cards/CardInlineImages";
import { CardInlineImage } from "../cards/CardInlineImage";
import { PosterCard } from "../cards/PosterCard";

// config
import { config } from "../../config";

// types
import { Movie } from "../../types/movie.type";

// data
import movies from "../../assets/movies.json";

export const MovieSection = ({ date, decade, compactMode }: SectionProps) => {
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

  if (!movie) {
    return <></>;
  }

  return (
    <Section compactMode={compactMode}>
      <Card decade={decade} className="w-2/5">
        <CardDate>Movie of {date.getFullYear()}:</CardDate>

        <CardInlineImage img={movie.awards} className="max-h-[8dvh]" />

        <CardTitle className={`header-font-${decade}`}>{movie.title}</CardTitle>

        <CardSubtitle>
          Directed by: {movie.directors.slice(0, 2).join(", ")}
          <br />
          {remainingDirectors(movie.directors.slice(2))}
        </CardSubtitle>

        <CardInfoText>Runtime: {movie.runtime}</CardInfoText>

        <CardSubtitle>{movie.tagline}</CardSubtitle>

        <CardInlineImages
          imgs={movie.studios}
          className="max-w-[40%] max-h-[10dvh]"
        />

        <CardInlineImage
          img={movie.mpaa}
          className="max-w-[40%] max-h-[4dvh]"
        />
      </Card>

      <PosterCard
        decade={decade}
        src={config.assetsRoot + movie.image}
        alt={`${movie.title} poster`}
        zoomDialogTitle={`${movie.title} (${date.getFullYear()})`}
      />
    </Section>
  );
};
