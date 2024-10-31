import { useEffect, useState } from "react";

import { Card } from "./Card";
import games from "../../assets/games.json";

interface GameCardProps {
  date: Date;
  decade: string;
}

type Game = {
  title: string;
  creator: string;
  image: string;
};

export const GameCard = ({ date, decade }: GameCardProps) => {
  const [videoGame, setVideoGame] = useState<Game | null>(null);
  useEffect(() => {
    try {
      const videoGame = (games as { [key: string]: Game })[
        date.getFullYear().toString()
      ];
      setVideoGame(videoGame);
    } catch {
      setVideoGame(null);
    }
  }, [date]);

  return videoGame ? (
    <Card additionalClasses={`bg-${decade} bd-${decade}`}>
      <div className={`text-center bf-${decade}`}>Best Selling Video Game:</div>
      <div className={`text-center my-[5vw] hf-${decade}`}>
        {videoGame.title}
      </div>
      <p className={`text-center px-[7.5%] indent-[5vw] bf-${decade} body`}>
        By {videoGame.creator}
      </p>
      <img
        className="game-cover"
        src={"https://timecapsule.brendantrepal.com" + videoGame.image}
        alt="video game cover"
      />
    </Card>
  ) : (
    <></>
  );
};
