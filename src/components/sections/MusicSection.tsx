import { useEffect, useState } from "react";

import { Section, SectionProps } from "./Section";
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
        <div className={`card one bg-${decade} bd-${decade}`}>
          <div className={`text-center bf-${decade}`}>
            Notable Album of the Year:
          </div>
          <div className={`text-center my-[5vw] hf-${decade}`}>
            {album.title}
          </div>
          <p className={`text-center indent-[2vw] bf-${decade} body mb-[1vw]`}>
            By {album.artist}
          </p>
        </div>
        <div className={`card two poster bg-${decade} bd-${decade}`}>
          <img
            src={"https://timecapsule.brendantrepal.com" + album.image}
            alt=""
          />
        </div>
      </Section>
    )
  );
};
