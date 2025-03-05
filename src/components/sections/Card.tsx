import classNames from "classnames";
import { PropsWithChildren } from "react";

// types
import type { Decade } from "../../types/decade.type";

export interface CardProps extends PropsWithChildren {
  decade: Decade | null;
  className?: string;
}

export const Card = ({ decade, className, children }: CardProps) => (
  <div
    className={classNames(
      "card",
      `background-${decade} border-${decade}`,
      className
    )}
  >
    {children}
  </div>
);
