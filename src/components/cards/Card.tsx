import classNames from "classnames";

import { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  decade?: string;
  additionalClasses?: string;
}

export const Card = ({ decade, additionalClasses, children }: CardProps) => (
  <div
    className={classNames(
      "card",
      decade ? `bg-${decade} bd-${decade}` : undefined,
      additionalClasses
    )}
  >
    {children}
  </div>
);
