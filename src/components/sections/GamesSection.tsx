import { useEffect, useState } from "react";

import { Section, SectionProps } from "./Section";
import { Card } from "./Card";

import { config } from "../../config";
import games from "../../assets/games.json";

type Game = {
  title: string;
  creator: string;
  image: string;
  landscape?: boolean;
};

export const GamesSection = ({ date, decade }: SectionProps) => {
  const [game, setGame] = useState<Game | null>(null);
  useEffect(() => {
    try {
      const videoGame = (games as { [key: string]: Game })[
        date.getFullYear().toString()
      ];
      setGame(videoGame);
    } catch {
      setGame(null);
    }
  }, [date]);

  return (
    game && (
      <Section name="games" landscape>
        <Card decade={decade} className="w-2/5">
          <div className="top-text">Game of {date.getFullYear()}:</div>
          <div className={`title-text header-font-${decade}`}>{game.title}</div>
          <p className="body-text">By {game.creator}</p>
        </Card>
        <Card decade={decade} className="poster">
          <img
            className="game-cover"
            src={config.assetsRoot + game.image}
            alt={`${game.title} cover`}
          />
        </Card>
      </Section>
    )
  );
};
