import { PropsWithChildren } from "react";
import classNames from "classnames";

export interface CardTitleProps extends PropsWithChildren {
  className?: string;
}

export const CardTitle = ({ className, children }: CardTitleProps) => (
  <div className={classNames("text-center my-[2dvh] text-pretty", className)}>
    {children}
  </div>
);
