import { BaseData } from "./base-data.type";
import { ImageBase } from "./image-base.type";

export type Movie = BaseData & {
  awards: ImageBase | null;
  title_inline?: Record<string, string>;
  studio: (ImageBase & {
    inline_styles?: Record<string, string>;
  })[];
  mpaa: ImageBase | null;
  runtime: string;
  directors: string[];
  tagline: string;
  description: string;
};
