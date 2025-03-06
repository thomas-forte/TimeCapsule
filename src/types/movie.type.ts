export type Movie = {
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
