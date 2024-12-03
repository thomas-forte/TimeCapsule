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
      <Section>
        <Card decade={decade} className="basis-1/3">
          <div className={`text-center`}>Notable Album of the Year:</div>
          <div className={`text-center my-[5vw] hf-${decade}`}>
            {album.title}
          </div>
          <p className={`text-center indent-[2vw] body mb-[1vw]`}>
            By {album.artist}
          </p>
        </Card>
        <Card decade={decade} className="basis-2/3 poster">
          <img
            src={config.assetsRoot + album.image}
            alt={`${album.title} cover`}
          />
        </Card>
      </Section>
    )
  );
};
