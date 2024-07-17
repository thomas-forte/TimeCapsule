import { useEffect, useState } from "react";

import { Card } from "./Card";
import { getTopMovie, Movie } from "../tmdb.service";

interface MovieCardProps {
  date: Date;
  decade: string;
}

export const MovieCard = ({ date, decade }: MovieCardProps) => {
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

  return movie ? (
    <Card additionalClasses={`bg-${decade} bd-${decade}`}>
      <div className={`text-center bf-${decade}`}>
        Top Movie The Year You Were Born:
      </div>
      <div className={`text-center my-[5vw] hf-${decade}`}>{movie.title}</div>
      <p className={`text-center px-[7.5%] indent-[5vw] bf-${decade} body`}>
        {movie.overview}
      </p>
      <img
        className="movie-poster"
        src={`https://media.themoviedb.org/t/p/w500//${movie.poster_path}`}
        alt=""
      />
    </Card>
  ) : (
    <></>
  );
};
