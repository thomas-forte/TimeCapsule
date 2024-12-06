import { useEffect, useState } from "react";

import { Section, SectionProps } from "./Section";
import { Card } from "./Card";

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
      <Section name="news">
        <Card decade={decade} className="w-1/2 poster flex flex-col">
          <div className="top-text mb-4">News of the Day:</div>
          <img src={newspaper} alt="" />
        </Card>
      </Section>
    )
  );
};
