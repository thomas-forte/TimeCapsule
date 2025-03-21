import classNames from "classnames";
import { PropsWithChildren } from "react";

// types
import type { Decade } from "../../types/decade.type";

export interface BaseCardProps {
  decade: Decade | null;
  className?: string;
  landscape?: boolean;
  compactMode?: boolean;
}

export type CardProps = BaseCardProps & PropsWithChildren;

export const Card = ({
  decade,
  className,
  compactMode,
  children,
}: CardProps) => (
  <div
    className={classNames(
      "max-h-full p-[1vw]",
      "break-words overflow-hidden",
      `border border-solid rounded border-${decade}`,
      `background-${decade}`,
      {
        "max-w-[40%] min-w-[25%]": !compactMode,
        "max-w-[80%] min-w-[75%]": compactMode,
      },
      className
    )}
  >
    {children}
  </div>
);
