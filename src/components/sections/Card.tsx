import classNames from "classnames";
import { PropsWithChildren } from "react";

export interface CardProps extends PropsWithChildren {
  className?: string;
}

export const Card = ({ className, children }: CardProps) => (
  <div className={classNames("card", className)}>{children}</div>
);
