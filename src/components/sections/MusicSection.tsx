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
          <p className="body-text">Genre: {album.genre}</p>
          <div className="flex flex-wrap justify-center mt-5 gap-[10%]">
            {album.label.map((labelUrl, index) => (
              <img
                className="max-w-[40%] max-h-[15dvh]"
                key={album.title + index}
                src={config.assetsRoot + labelUrl}
                alt="record label icon"
              />
            ))}
          </div>
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
