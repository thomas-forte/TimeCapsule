import { useEffect, useState } from "react";

import { Card } from "./Card";
import videoGames from "../assets/video_games.json";

interface VideoGameCardProps {
  date: Date;
  decade: string;
}

type VideoGame = {
  title: string;
  developer: string;
  publisher: string;
  platform: string;
  sales: number | null;
  image: string;
};

const MIN_DATE = new Date(1980, 0, 1);

export const VideoGameCard = ({ date, decade }: VideoGameCardProps) => {
  const [videoGame, setVideoGame] = useState<VideoGame | null>(null);
  useEffect(() => {
    if (date >= MIN_DATE) {
      try {
        const videoGame = (videoGames as { [key: string]: VideoGame })[
          date.getFullYear().toString()
        ];
        setVideoGame(videoGame);
      } catch {
        setVideoGame(null);
      }
    }
  }, [date]);

  return videoGame ? (
    <Card additionalClasses={`bg-${decade} bd-${decade}`}>
      <div className={`text-center bf-${decade}`}>Best Selling Video Game:</div>
      <div className={`text-center my-[5vw] hf-${decade}`}>
        {videoGame.title}
      </div>
      <p className={`text-center px-[7.5%] indent-[5vw] bf-${decade} body`}>
        By {videoGame.developer}
      </p>
      <img
        className="game-cover"
        src={videoGame.image}
        alt="video game cover"
      />
    </Card>
  ) : (
    <></>
  );
};
