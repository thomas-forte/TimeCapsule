import { useEffect, useState } from "react";

import { Section, SectionProps } from "./Section";
import { checkForNewspaper } from "../../newspaper.service";

export const NewsSection = ({ date, decade }: SectionProps) => {
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

  return (
    newspaper && (
      <Section>
        <div className={`card one bg-${decade} bd-${decade}`}>
          <div className={`text-center bf-${decade} mb-[1vw]`}>
            News of the Day:
          </div>
          <img className="poster" src={newspaper} alt="" />
        </div>
      </Section>
    )
  );
};
