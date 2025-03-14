import { BaseData } from "./base-data.type";
import { ImageBase } from "./image-base.type";

export type Album = BaseData & {
  awards: ImageBase | null;
  artist: string;
  genre: string;
  labels: ImageBase[];
  certification: ImageBase | null;
  advisory: ImageBase | null;
};
