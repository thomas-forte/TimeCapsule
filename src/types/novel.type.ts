import { BaseData } from "./base-data.type";
import { ImageBase } from "./image-base.type";

export type Novel = BaseData & {
  awards: ImageBase[];
  author: string;
};
