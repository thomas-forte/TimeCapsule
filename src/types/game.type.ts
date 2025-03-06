export type Game = {
  awards: { url: string; tooltip: string }[] | null;
  title: string;
  esrb: { url: string; tooltip: string } | null;
  creator: string;
  companies: { url: string; tooltip: string }[];
  company_inline?: Record<string, string>;
  image: string;
  landscape?: boolean;
};
