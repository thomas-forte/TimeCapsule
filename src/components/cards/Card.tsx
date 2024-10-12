import classNames from "classnames";

import { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  additionalClasses?: string;
}

export const Card = ({ additionalClasses, children }: CardProps) => (
  <div className={classNames("card", additionalClasses)}>{children}</div>
);
