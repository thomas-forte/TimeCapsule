import classNames from "classnames";

import { Card } from "./Card";

interface DateCardProps {
  date: Date;
  decade: string;
}

export const DateCard = ({ date, decade }: DateCardProps) => (
  <Card additionalClasses={`dateCard bg-${decade} bd-${decade}`}>
    <div>
      <div className={classNames("text-center -mb-[2vw]", `bf-${decade}`)}>
        {date.toLocaleString("default", { month: "long" })} {date.getDate()},
      </div>
      <div className={classNames("text-center", `hf-${decade}`)}>
        {date.getFullYear()}
      </div>
    </div>
  </Card>
);
