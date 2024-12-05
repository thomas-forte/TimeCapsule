import classNames from "classnames";
import { PropsWithChildren } from "react";

export interface CardProps extends PropsWithChildren {
  decade: string;
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
