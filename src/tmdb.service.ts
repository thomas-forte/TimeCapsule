import axios from "axios";

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
interface TMDB_RESPONSE {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const getTopMovie = async (date: Date): Promise<Movie | string> => {
  return await axios
    .get<TMDB_RESPONSE>("https://api.themoviedb.org/3/discover/movie", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjYyNjI4N2M2ZGU3Yzk4ODUwNjVlNTBjN2MyNzY1NCIsInN1YiI6IjY2MDYxN2JmYTg5NGQ2MDE3YzYyNDkxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B1Lq6M9BipX3yYlMkNkluP9ljFAU7rklKjW2B6_X0_A",
      },
      params: {
        include_adult: "false",
        include_video: "false",
        language: "en-US",
        page: "1",
        primary_release_year: date.getFullYear().toString(),
        sort_by: "revenue.desc",
      },
    })
    .then((response) => {
      if (response.status === 200) {
        return response.data.results[0];
      } else {
        return "problem";
      }
    })
    .catch(() => {
      return "big problem";
    });
};
