import { PropsWithChildren } from "react";

export interface SectionProps extends PropsWithChildren {
  date: Date;
  decade: string;
}

interface BaseSectionProps extends PropsWithChildren {
  name: string;
}

export const Section = ({ children, name }: BaseSectionProps) => (
  <div className={"section-container " + name}>{children}</div>
);
