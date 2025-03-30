import { useEffect, useState } from "react";

// components
import { Section, SectionProps } from "./Section";
import { Card } from "../cards/Card";
import { CardDate } from "../cards/CardDate";
import { CardTitle } from "../cards/CardTitle";
import { CardSubtitle } from "../cards/CardSubtitle";
import { CardInfoText } from "../cards/CardInfoText";
import { PosterCard } from "../cards/PosterCard";
import { CardInlineImages } from "../cards/CardInlineImages";
import { CardInlineImage } from "../cards/CardInlineImage";

// config
import { config } from "../../config";

// types
import { Album } from "../../types/album.type";

// data
import albums from "../../assets/albums.json";

export const AlbumSection = ({ date, decade, compactMode }: SectionProps) => {
  const [album, setAlbum] = useState<Album | null>(null);

  useEffect(() => {
    try {
      const album = (albums as { [key: string]: Album })[
        date.getFullYear().toString()
      ];
      setAlbum(album);
    } catch {
      setAlbum(null);
    }
  }, [date]);

  if (!album) {
    return <></>;
  }

  return (
    <Section
      compactMode={compactMode}
      frontCard={
        <Card decade={decade} compactMode={compactMode}>
          <CardDate>Album of {date.getFullYear()}:</CardDate>

          <div className="flex flex-wrap justify-center mt-[2dvh] mx-[2dvw] gap-[2dvw]">
            {album.awards && (
              <img
                className="max-h-[8dvh]"
                src={config.assetsRoot + album.awards.url}
                alt={album.awards.tooltip}
                title={album.awards.tooltip}
              />
            )}
            {album.certification && (
              <img
                className="max-h-[8dvh]"
                src={config.assetsRoot + album.certification.url}
                alt={album.certification.tooltip}
                title={album.certification.tooltip}
              />
            )}
          </div>

          <CardTitle className={`header-font-${decade}`}>
            {album.title}
          </CardTitle>

          <CardSubtitle>By {album.artist}</CardSubtitle>

          <CardInfoText>Genre: {album.genre}</CardInfoText>

          <CardInlineImages
            imgs={album.labels}
            className="max-w-[40%] max-h-[10dvh]"
          />

          <CardInlineImage
            img={album.advisory}
            className="max-w-[40%] max-h-[7dvh]"
          />
        </Card>
      }
      backCard={
        <PosterCard
          decade={decade}
          src={config.assetsRoot + album.image}
          alt={`${album.title} cover`}
          compactMode={compactMode}
          zoomDialogTitle={`${album.title} (${date.getFullYear()})`}
        />
      }
    />
  );
};
