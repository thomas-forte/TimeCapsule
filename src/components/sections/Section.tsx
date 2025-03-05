import classNames from "classnames";
import { PropsWithChildren } from "react";

// types
import { Decade } from "../../types/decade.type";

export interface SectionProps extends PropsWithChildren {
  date: Date;
  decade: Decade | null;
}

interface BaseSectionProps extends PropsWithChildren {
  name: string;
  landscape?: boolean;
}

export const Section = ({ children, name, landscape }: BaseSectionProps) => (
  <div
    className={classNames(
      "section-container snap-center",
      name,
      landscape && "landscape"
    )}
  >
    {children}
  </div>
);
