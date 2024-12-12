import classNames from "classnames";

import { NovelSection } from "./sections/NovelSection";
import { MovieSection } from "./sections/MovieSection";
import { NewsSection } from "./sections/NewsSection";
import { GamesSection } from "./sections/GamesSection";
import { AlbumSection } from "./sections/AlbumSection";

import { Card } from "./sections/Card";
import { Section } from "./sections/Section";
import { config } from "../config";

interface DateDetailsProps {
  date: Date;
  decade: string;
  filters: string[];
}

export const DateDetails = ({ date, decade, filters }: DateDetailsProps) => {
  let backgroundImage = "";
  if (date.getFullYear() < 2010) {
    backgroundImage = `url(/images/${decade}bg.svg)`;
  } else if (date.getFullYear() < 2020) {
    backgroundImage = "radial-gradient(#DBD2CB 40%, #CCBDB6 60%)";
  } else if (date.getFullYear() < 2030) {
    backgroundImage = "linear-gradient(#665533, #665533)";
  } else {
    backgroundImage = "radial-gradient(#FFF 0, #F0F0F0 100%)";
  }

  return (
    <div
      className={classNames(
        "h-dvh max-w-full overflow-y-hidden content-container flex",
        `body-font-${decade}`
      )}
      style={{ backgroundImage }}
    >
      {date > config.maximumDate && (
        <Section name="future">
          <Card decade={decade} className="w-2/5">
            <div className="top-text">This date:</div>
            <div className={`title-text header-font-${decade}`}>
              {date.toLocaleDateString()}
            </div>
            <p className="body-text">Is not currently ready.</p>
          </Card>
        </Section>
      )}

      {(!filters.length || filters.includes("books")) && (
        <MovieSection date={date} decade={decade} />
      )}
      {(!filters.length || filters.includes("movies")) && (
        <NovelSection date={date} decade={decade} />
      )}
      {(!filters.length || filters.includes("news")) && (
        <NewsSection date={date} decade={decade} />
      )}
      {(!filters.length || filters.includes("games")) && (
        <GamesSection date={date} decade={decade} />
      )}
      {(!filters.length || filters.includes("music")) && (
        <AlbumSection date={date} decade={decade} />
      )}
    </div>
  );
};
