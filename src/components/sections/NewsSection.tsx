import { useEffect, useState } from "react";

// components
import { Section, SectionProps } from "./Section";
import { PosterCard } from "../cards/PosterCard";

// service
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

  if (!newspaper) {
    return <></>;
  }

  return (
    <Section>
      <PosterCard
        decade={decade}
        src={newspaper}
        alt={`new paper of ${date}`}
        zoomDialogTitle={`Newspaper of ${date.toLocaleDateString()}`}
      />
    </Section>
  );
};
