import { PropsWithChildren } from "react";

export interface SectionProps extends PropsWithChildren {
  date: Date;
  decade: string;
}

export const Section = ({ children }: PropsWithChildren) => (
  <div className="section-container">{children}</div>
);
