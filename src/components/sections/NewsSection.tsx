import { useEffect, useState } from "react";

import { Section, SectionProps } from "./Section";
import { Card } from "./Card";
import { ZoomDialog } from "../ZoomDialog";

import { checkForNewspaper } from "../../newspaper.service";

export const NewsSection = ({ date, decade }: SectionProps) => {
  const [newspaper, setNewspaper] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

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
        <Card decade={decade} className="poster flex flex-col">
          <div className="top-text mb-[3dvh]">News of the Day:</div>
          <img
            className="newspaper cursor-zoom-in"
            src={newspaper}
            alt={`new paper of ${date}`}
            onClick={() => setIsOpen(true)}
          />
          <ZoomDialog
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            imgSrc={newspaper}
            imgAlt={`new paper of ${date}`}
          />
        </Card>
      </Section>
    )
  );
};
