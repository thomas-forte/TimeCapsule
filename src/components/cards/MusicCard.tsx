import { useEffect, useState } from "react";

import { Card } from "./Card";
import musics from "../../assets/music.json";

interface MusicCardProps {
  date: Date;
  decade: string;
}

type Album = {
  title: string;
  artist: string;
  genre: string;
  label: string[];
  image: string;
};

export const MusicCard = ({ date, decade }: MusicCardProps) => {
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

  return album ? (
    <Card decade={decade}>
      <div className={`text-center bf-${decade}`}>
        Notable Album of the Year:
      </div>
      <div className={`text-center my-[5vw] hf-${decade}`}>{album.title}</div>
      <p className={`text-center indent-[2vw] bf-${decade} body mb-[1vw]`}>
        By {album.artist}
      </p>
      <img
        className="album-cover"
        src={"https://timecapsule.brendantrepal.com" + album.image}
        alt="video game cover"
      />
    </Card>
  ) : (
    <></>
  );
};
