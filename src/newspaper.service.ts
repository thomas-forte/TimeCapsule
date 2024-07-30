import axios from "axios";

const UNDERSCORE_DATES = new Date(1950, 6, 1);

export const checkForNewspaper = async (
  date: Date,
  decade: string
): Promise<string | null> => {
  let formattedDate = date.toISOString().substring(0, 10);
  if (date < UNDERSCORE_DATES) {
    formattedDate = formattedDate.replace(/-/g, "_");
  }

  const url =
    "https://timecapsule.brendantrepal.com/images/newspapers" +
    `/${decade}/${date.getFullYear()}` +
    `/${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.toLocaleString("default", {
      month: "long",
    })}` +
    `/${formattedDate}.jpg`;

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
