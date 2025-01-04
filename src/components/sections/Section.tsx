import classNames from "classnames";
import { PropsWithChildren } from "react";

export interface SectionProps extends PropsWithChildren {
  date: Date;
  decade: string;
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
