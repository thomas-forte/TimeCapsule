import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import classNames from "classnames";

// section components
import { NovelSection } from "./sections/NovelSection";
import { MovieSection } from "./sections/MovieSection";
import { NewsSection } from "./sections/NewsSection";
import { GamesSection } from "./sections/GamesSection";
import { AlbumSection } from "./sections/AlbumSection";
import { DateNotFoundSection } from "./sections/DateNotFoundSection";

// types
import type { Decade } from "../types/decade.type";
import { Filters } from "../types/filters.type";

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
    const [backgroundImage, setBackgroundImage] = useState("");
    const [backgroundPositionX, setBackgroundPositionX] = useState("50%");
    const [backgroundPositionY, setBackgroundPositionY] = useState("50%");

    useEffect(() => {
      const suffix = compactMode ? "bg" : "bgh";
      if (date.getFullYear() < 2010) {
        setBackgroundImage(`url(/images/${decade}${suffix}.svg)`);
      } else if (date.getFullYear() < 2020) {
        setBackgroundImage("radial-gradient(#DBD2CB 40%, #CCBDB6 60%)");
      } else if (date.getFullYear() < 2030) {
        setBackgroundImage("linear-gradient(#665533, #665533)");
      } else {
        setBackgroundImage("radial-gradient(#FFF 0, #F0F0F0 100%)");
      }
    }, [date, decade, compactMode]);

    const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
      const { scrollLeft, scrollWidth, scrollTop, scrollHeight } =
        e.currentTarget;
      if (compactMode) {
        setBackgroundPositionY(`${50 - 25 * (scrollTop / scrollHeight)}%`);
      } else {
        setBackgroundPositionX(`${50 + 25 * (scrollLeft / scrollWidth)}%`);
      }
    };

    return (
      <div
        className={classNames(
          "h-dvh min-w-full",
          "flex gap-[3dvh] p-[3dvh]",
          "snap-mandatory",
          `body-font-${decade}`,
          {
            "flex-col snap-y overflow-x-hidden": compactMode,
            "flex-row snap-x overflow-y-hidden": !compactMode,
          }
        )}
        ref={sectionsRef}
        onScroll={onScroll}
      >
        <DateNotFoundSection date={date} decade={decade} />

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

        <img
          className={classNames(
            "absolute left-0 top-0 h-dvh w-full -z-50",
            "bg-top bg-repeat-y",
            {
              "bg-[length:auto_100%]": !compactMode,
              "bg-[length:100%_auto]": compactMode,
            }
          )}
          style={{ backgroundImage, backgroundPositionX, backgroundPositionY }}
        />
      </div>
    );
  }
);
