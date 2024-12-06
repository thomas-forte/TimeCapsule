import { useEffect, useState } from "react";

import { Section, SectionProps } from "./Section";
import { Card } from "./Card";

import { config } from "../../config";
import musics from "../../assets/music.json";

type Album = {
  title: string;
  artist: string;
  genre: string;
  label: string[];
  image: string;
};

export const MusicSection = ({ date, decade }: SectionProps) => {
  const [album, setAlbum] = useState<Album | null>(null);
  useEffect(() => {
    try {
      const album = (musics as { [key: string]: Album })[
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
          <div className="top-text">Notable Album of the Year:</div>
          <div className={`title-text header-font-${decade}`}>
            {album.title}
          </div>
          <p className="subtitle-text">By {album.artist}</p>
        </Card>
        <Card decade={decade} className="poster">
          <img
            src={config.assetsRoot + album.image}
            alt={`${album.title} cover`}
          />
        </Card>
      </Section>
    )
  );
};
