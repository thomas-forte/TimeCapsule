import { PropsWithChildren } from "react";

import styles from "./Section.module.css";

export interface SectionProps extends PropsWithChildren {
  date: Date;
  decade: string;
}

export const Section = ({ children }: PropsWithChildren) => (
  <div className={styles.section}>{children}</div>
);
