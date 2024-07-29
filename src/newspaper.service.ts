import axios from "axios";

export const checkForNewspaper = async (
  date: Date,
  decade: string
): Promise<string | null> => {
  const formattedDate = date.toISOString().substring(0, 10);

  const url =
    "https://timecapsule.brendantrepal.com/images/newspapers" +
    `/${decade}/${date.getFullYear()}` +
    `/${date.getMonth() + 1}-${date.toLocaleString("default", {
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
