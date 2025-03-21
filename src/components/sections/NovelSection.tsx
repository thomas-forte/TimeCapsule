import { useEffect, useState } from "react";

// components
import { Section, SectionProps } from "./Section";
import { Card } from "../cards/Card";
import { CardDate } from "../cards/CardDate";
import { CardTitle } from "../cards/CardTitle";
import { CardSubtitle } from "../cards/CardSubtitle";
import { CardInlineImages } from "../cards/CardInlineImages";
import { PosterCard } from "../cards/PosterCard";

// config
import { config } from "../../config";

// types
import { Novel } from "../../types/novel.type";

// data
import novels from "../../assets/novels.json";

export const NovelSection = ({ date, decade, compactMode }: SectionProps) => {
  const [novel, setNovel] = useState<Novel | null>(null);
  const [flip, setFlip] = useState(false);

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
    <Section
      compactMode={compactMode}
      flip={flip}
      onClick={() => setFlip(!flip)}
      frontCard={
        <Card decade={decade} compactMode={compactMode}>
          <CardDate>Novel of {date.getFullYear()}:</CardDate>

          <CardInlineImages imgs={novel.awards} className="max-h-[8dvh]" />

          <CardTitle className={`header-font-${decade}`}>
            {novel.title}
          </CardTitle>

          <CardSubtitle>By {novel.author}</CardSubtitle>
        </Card>
      }
      backCard={
        <PosterCard
          decade={decade}
          src={config.assetsRoot + novel.image}
          alt={`${novel.title} cover`}
          compactMode={compactMode}
          zoomDialogTitle={`${novel.title} (${date.getFullYear()})`}
        />
      }
    />
  );
};
