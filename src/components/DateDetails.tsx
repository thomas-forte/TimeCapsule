import { forwardRef, useImperativeHandle, useRef } from "react";
import classNames from "classnames";

// section components
import { NovelSection } from "./sections/NovelSection";
import { MovieSection } from "./sections/MovieSection";
import { NewsSection } from "./sections/NewsSection";
import { GamesSection } from "./sections/GamesSection";
import { AlbumSection } from "./sections/AlbumSection";

// components
import { Card } from "./cards/Card";
import { Section } from "./sections/Section";

// types
import type { Decade } from "../types/decade.type";
import { Filters } from "../types/filters.type";

import { config } from "../config";

interface DateDetailsProps {
  compactMode: boolean;
  date: Date;
  decade: Decade | null;
  filters: Filters[];
}

export interface DateDetailsRef {
  scrollToBeginning: () => void;
}

export const DateDetails = forwardRef(
  ({ compactMode, date, decade, filters }: DateDetailsProps, ref) => {
    // expose a method to scroll to the beginning of the section
    useImperativeHandle<unknown, DateDetailsRef>(ref, () => ({
      scrollToBeginning: () => {
        if (compactMode) {
          sectionsRef.current?.scrollTo({ top: 0 });
        } else {
          sectionsRef.current?.scrollTo({ left: 0 });
        }
      },
    }));

    const sectionsRef = useRef<HTMLDivElement>(null);

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
          "h-dvh min-w-full",
          "flex gap-[3dvh] p-[3dvh]",
          "bg-top bg-repeat-y bg-[length:100%_auto]",
          "snap-mandatory",
          `body-font-${decade}`,
          {
            "flex-col snap-y overflow-x-hidden": compactMode,
            "flex-row snap-x overflow-y-hidden": !compactMode,
          }
        )}
        style={{ backgroundImage }}
        ref={sectionsRef}
      >
        {date > config.maximumDate && (
          <Section>
            <Card decade={decade} className="w-2/5">
              <div className="top-text">This date:</div>
              <div className={`title-text header-font-${decade}`}>
                {date.toLocaleDateString()}
              </div>
              <p className="body-text">Is not currently ready.</p>
            </Card>
          </Section>
        )}

        {(!filters.length || filters.includes(Filters.MOVIES)) && (
          <MovieSection date={date} decade={decade} compactMode={compactMode} />
        )}
        {(!filters.length || filters.includes(Filters.NOVELS)) && (
          <NovelSection date={date} decade={decade} compactMode={compactMode} />
        )}
        {(!filters.length || filters.includes(Filters.NEWS)) && (
          <NewsSection date={date} decade={decade} compactMode={compactMode} />
        )}
        {(!filters.length || filters.includes(Filters.GAMES)) && (
          <GamesSection date={date} decade={decade} compactMode={compactMode} />
        )}
        {(!filters.length || filters.includes(Filters.ALBUMS)) && (
          <AlbumSection date={date} decade={decade} compactMode={compactMode} />
        )}
      </div>
    );
  }
);
