import { useEffect, useState } from "react";

import { Section, SectionProps } from "./Section";
import { Card } from "./Card";
import { ZoomDialog } from "../ZoomDialog";

import { config } from "../../config";
import novels from "../../assets/novels.json";

type Novel = {
  awards: string[];
  author: string;
  image: string;
  title: string;
};

export const NovelSection = ({ date, decade }: SectionProps) => {
  const [novel, setNovel] = useState<Novel | null>(null);
  const [isOpen, setIsOpen] = useState(false);

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
          <div className="top-text">Novel of {date.getFullYear()}:</div>
          {novel.awards.length && (
            <div className="flex flex-wrap justify-center gap-[2dvw] mt-[2dvh] mx-[2dvw]">
              {novel.awards.map((awardUrl, index) => (
                <img
                  key={novel.title + "award" + index}
                  className="max-h-[8dvh]"
                  src={config.assetsRoot + awardUrl}
                  alt="novel award image"
                />
              ))}
            </div>
          )}
          <div className={`title-text header-font-${decade}`}>
            {novel.title}
          </div>
          <p className="body-text">By {novel.author}</p>
        </Card>
        <Card decade={decade} className="poster">
          <img
            className="novel-cover cursor-zoom-in"
            src={config.assetsRoot + novel.image}
            alt={`${novel.title} cover`}
            onClick={() => setIsOpen(true)}
          />
          <ZoomDialog
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            imgSrc={config.assetsRoot + novel.image}
            imgAlt={`${novel.title} cover`}
          />
        </Card>
      </Section>
    )
  );
};
