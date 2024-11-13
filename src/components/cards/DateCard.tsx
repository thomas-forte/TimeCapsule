import classNames from "classnames";

import styles from "./Card.module.css";

interface DateCardProps {
  date: Date;
  decade: string;
}

export const DateCard = ({ date, decade }: DateCardProps) => (
  <div
    className={classNames(
      styles.card,
      styles.dateCard,
      decade ? `bg-${decade} bd-${decade}` : undefined
    )}
  >
    <div>
      <div className={classNames("text-center -mb-[2vw]", `bf-${decade}`)}>
        {date.toLocaleString("default", { month: "long" })} {date.getDate()},
      </div>
      <div className={classNames("text-center", `hf-${decade}`)}>
        {date.getFullYear()}
      </div>
    </div>
  </div>
);
