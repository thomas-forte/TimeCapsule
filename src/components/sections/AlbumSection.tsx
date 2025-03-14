import { useEffect, useState } from "react";

// components
import { Section, SectionProps } from "./Section";
import {
  Card,
  CardDate,
  CardInfoText,
  CardInlineImage,
  CardSubtitle,
  CardTitle,
  Poster,
} from "./Card";

// config
import { config } from "../../config";

// types
import { Album } from "../../types/album.type";

// data
import albums from "../../assets/albums.json";

export const AlbumSection = ({ date, decade }: SectionProps) => {
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
    <Section>
      <Card decade={decade} className="w-2/5">
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

        <CardTitle className={`header-font-${decade}`}>{album.title}</CardTitle>

        <CardSubtitle>By {album.artist}</CardSubtitle>

        <CardInfoText>Genre: {album.genre}</CardInfoText>

        <div className="flex flex-wrap justify-center mt-[2dvh] gap-[2dvw]">
          {album.labels.map((label, index) => (
            <img
              className="max-w-[40%] max-h-[10dvh]"
              key={album.title + index}
              src={config.assetsRoot + label.url}
              alt={label.tooltip}
              title={label.tooltip}
            />
          ))}
        </div>

        <CardInlineImage
          img={
            album.advisory
              ? {
                  className: "max-w-[40%] max-h-[7dvh]",

                  src: config.assetsRoot + album.advisory.url,
                  alt: album.advisory.tooltip,
                  tooltip: album.advisory.tooltip,
                }
              : undefined
          }
        />
      </Card>

      <Poster
        decade={decade}
        src={config.assetsRoot + album.image}
        alt={`${album.title} cover`}
        zoomDialogTitle={`${album.title} (${date.getFullYear()})`}
      />
    </Section>
  );
};
