import classNames from "classnames";
import { PropsWithChildren } from "react";

// types
import type { Decade } from "../../types/decade.type";

export interface BaseCardProps {
  decade: Decade | null;
  className?: string;
  landscape?: boolean;
}

export type CardProps = BaseCardProps & PropsWithChildren;

export const Card = ({ decade, className, children }: CardProps) => (
  <div
    className={classNames(
      "max-h-full max-w-full p-[1vw]",
      "break-words overflow-hidden",
      `border border-solid rounded border-${decade}`,
      `background-${decade}`,
      className
    )}
  >
    {children}
  </div>
);
