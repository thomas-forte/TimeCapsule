import { BaseData } from "./base-data.type";
import { ImageBase } from "./image-base.type";

export type Game = BaseData & {
  awards: ImageBase[] | null;
  esrb: ImageBase | null;
  creator: string;
  companies: ImageBase[];
  company_inline?: Record<string, string>;
  landscape?: boolean;
};
