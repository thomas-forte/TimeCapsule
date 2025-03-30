import classNames from "classnames";
import { PropsWithChildren } from "react";

// types
import type { Decade } from "../../types/decade.type";

// styles
import styles from "./card.module.css";

export interface BaseCardProps {
  decade: Decade | null;
  className?: string;
  landscape?: boolean;
  compactMode?: boolean;
  flipping?: boolean;
}

export type CardProps = BaseCardProps & PropsWithChildren;

export const Card = ({
  decade,
  className,
  compactMode,
  flipping,
  children,
}: CardProps) => (
  <div
    className={classNames(
      "p-[1vw]",
      "break-words overflow-hidden",
      `border border-solid rounded border-${decade}`,
      `background-${decade}`,
      {
        "max-h-full max-w-[40%] min-w-[25%]": !compactMode,
        "max-w-full": compactMode,
      },
      styles.cardAnimation,
      flipping && styles.out,
      className
    )}
  >
    {children}
  </div>
);
