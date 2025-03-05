import axios from "axios";

import { config } from "./config";
import { Decade } from "./types/decade.type";

export const checkForNewspaper = async (
  date: Date,
  decade: Decade | null
): Promise<string | null> => {
  // Check if the decade is valid
  if (!decade) {
    return null;
  }

  // Build the URL
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

  // Check if the image exists
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
