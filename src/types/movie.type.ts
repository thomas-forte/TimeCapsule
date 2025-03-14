import { BaseData } from "./base-data.type";
import { ImageBase } from "./image-base.type";

export type Movie = BaseData & {
  awards: ImageBase | null;
  title_inline?: Record<string, string>;
  studios: ImageBase[];
  mpaa: ImageBase | null;
  runtime: string;
  directors: string[];
  tagline: string;
  description: string;
};
