import { useEffect, useState } from "react";

import { Card } from "./Card";
import { checkForNewspaper } from "../../newspaper.service";

interface NewsCardProps {
  date: Date;
  decade: string;
}

export const NewsCard = ({ date, decade }: NewsCardProps) => {
  const [newspaper, setNewspaper] = useState<string | null>(null);
  useEffect(() => {
    async function fetchData() {
      const newspaperUrl = await checkForNewspaper(date, decade);
      if (newspaperUrl) {
        setNewspaper(newspaperUrl);
      } else {
        setNewspaper(null);
      }
    }
    fetchData();
  }, [date, decade]);

  return newspaper ? (
    <Card additionalClasses={`bg-${decade} bd-${decade}`}>
      <div className={`text-center bf-${decade}`}>News of the Day:</div>
      <img className="newspaper" src={newspaper} alt="book cover" />
    </Card>
  ) : (
    <></>
  );
};
