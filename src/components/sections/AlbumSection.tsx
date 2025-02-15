import { useEffect, useState } from "react";

import { Section, SectionProps } from "./Section";
import { Card } from "./Card";
import { ZoomDialog } from "../ZoomDialog";

import { config } from "../../config";
import albums from "../../assets/albums.json";

type Album = {
  awards: { url: string; tooltip: string } | null;
  title: string;
  artist: string;
  genre: string;
  labels: { url: string; tooltip: string }[];
  certification: { url: string; tooltip: string } | null;
  image: string;
};

export const AlbumSection = ({ date, decade }: SectionProps) => {
  const [album, setAlbum] = useState<Album | null>(null);
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    album && (
      <Section name="albums">
        <Card decade={decade} className="w-2/5">
          <div className="top-text">Album of {date.getFullYear()}:</div>
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
          <div className={`title-text header-font-${decade}`}>
            {album.title}
          </div>
          <p className="subtitle-text">By {album.artist}</p>
          <p className="body-text">Genre: {album.genre}</p>
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
        </Card>
        <Card decade={decade} className="poster">
          <img
            className="album-cover cursor-zoom-in"
            src={config.assetsRoot + album.image}
            alt={`${album.title} cover`}
            onClick={() => setIsOpen(true)}
          />
          <ZoomDialog
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            imgSrc={config.assetsRoot + album.image}
            imgAlt={`${album.title} cover`}
          />
        </Card>
      </Section>
    )
  );
};
