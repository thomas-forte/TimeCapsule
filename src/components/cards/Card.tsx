import { PropsWithChildren } from "react";
import classNames from "classnames";

import styles from "./Card.module.css";

interface CardProps extends PropsWithChildren {
  decade?: string;
}

export const Card = ({ decade, children }: CardProps) => (
  <div
    className={classNames(
      styles.card,
      decade ? `bg-${decade} bd-${decade}` : "bg-yellow-300"
    )}
  >
    {children}
  </div>
);
