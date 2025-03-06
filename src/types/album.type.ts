export type Album = {
  awards: { url: string; tooltip: string } | null;
  title: string;
  artist: string;
  genre: string;
  labels: { url: string; tooltip: string }[];
  certification: { url: string; tooltip: string } | null;
  advisory: { url: string; tooltip: string } | null;
  image: string;
};
