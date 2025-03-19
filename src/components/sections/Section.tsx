import classNames from "classnames";
import { PropsWithChildren } from "react";

// types
import { Decade } from "../../types/decade.type";

export interface SectionProps extends PropsWithChildren {
  date: Date;
  decade: Decade | null;
  compactMode?: boolean;
}

interface BaseSectionProps extends PropsWithChildren {
  compactMode?: boolean;
  landscape?: boolean;
}

export const Section = ({ children, landscape }: BaseSectionProps) => (
  <div
    className={classNames(
      "section",
      "min-w-full min-h-full",
      "flex gap-[2dvh] justify-around items-center",
      "snap-center",
      {
        "flex-col": landscape,
        "flex-row": !landscape,
      }
    )}
  >
    {children}
  </div>
);
