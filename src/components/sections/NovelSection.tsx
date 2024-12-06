import { useEffect, useState } from "react";

import { Section, SectionProps } from "./Section";
import { Card } from "./Card";

import { config } from "../../config";
import novels from "../../assets/novels.json";

type Novel = {
  author: string;
  image: string;
  title: string;
};

export const NovelSection = ({ date, decade }: SectionProps) => {
  const [novel, setNovel] = useState<Novel | null>(null);
  useEffect(() => {
    try {
      const novel = (novels as { [key: string]: Novel })[
        date.getFullYear().toString()
      ];
      setNovel(novel);
    } catch {
      setNovel(null);
    }
  }, [date]);

  return (
    novel && (
      <Section name="novels">
        <Card decade={decade} className="w-2/5">
          <div className="top-text">Most Popular Novel:</div>
          <div className={`title-text header-font-${decade}`}>
            {novel.title}
          </div>
          <p className="body-text">By {novel.author}</p>
        </Card>
        <Card decade={decade} className="poster">
          <img
            src={config.assetsRoot + novel.image}
            alt={`${novel.title} cover`}
          />
        </Card>
      </Section>
    )
  );
};
