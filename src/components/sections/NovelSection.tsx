import { useEffect, useState } from "react";

// components
import { Section, SectionProps } from "./Section";
import { Card, CardDate, CardSubtitle, CardTitle, Poster } from "./Card";

// config
import { config } from "../../config";

// types
import { Novel } from "../../types/novel.type";

// data
import novels from "../../assets/novels.json";

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

  if (!novel) {
    return <></>;
  }

  return (
    <Section>
      <Card decade={decade} className="w-2/5">
        <CardDate>Novel of {date.getFullYear()}:</CardDate>

        <div className="flex flex-wrap justify-center gap-[2dvw] mt-[2dvh] mx-[2dvw]">
          {novel.awards.map((award, index) => (
            <img
              key={novel.title + "award" + index}
              className="max-h-[8dvh]"
              src={config.assetsRoot + award.url}
              alt={award.tooltip}
              title={award.tooltip}
            />
          ))}
        </div>

        <CardTitle className={`header-font-${decade}`}>{novel.title}</CardTitle>

        <CardSubtitle>By {novel.author}</CardSubtitle>
      </Card>

      <Poster
        decade={decade}
        src={config.assetsRoot + novel.image}
        alt={`${novel.title} cover`}
        zoomDialogTitle={`${novel.title} (${date.getFullYear()})`}
      />
    </Section>
  );
};
