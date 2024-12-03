import axios from "axios";

import { config } from "./config";

export const checkForNewspaper = async (
  date: Date,
  decade: string
): Promise<string | null> => {
  const url =
    config.assetsRoot +
    "newspapers" +
    `/${decade}/${date.getFullYear()}` +
    `/${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.toLocaleString("default", {
      month: "long",
    })}` +
    `/${date.toISOString().substring(0, 10)}.jpg`;

  return await axios
    .get(url)
    .then((response) => {
      if (
        response.status === 200 &&
        response.headers["content-type"] === "image/jpeg"
      ) {
        return url;
      } else {
        return null;
      }
    })
    .catch(() => {
      return null;
    });
};
