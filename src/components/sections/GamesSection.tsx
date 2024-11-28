import { useEffect, useState } from "react";

import { Section, SectionProps } from "./Section";
import { Card } from "./Card";

import games from "../../assets/games.json";

type Game = {
  title: string;
  creator: string;
  image: string;
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
      <Section>
        <Card decade={decade} className="basis-1/2">
          <div className={`text-center`}>Best Selling Video Game:</div>
          <div className={`text-center my-[1vw] hf-${decade}`}>
            {game.title}
          </div>
          <p className={`text-center indent-[5vw] body mb-[1vw]`}>
            By {game.creator}
          </p>
        </Card>
        <Card decade={decade} className="basis-1/2 poster">
          <img
            className="game-cover"
            src={"https://timecapsule.brendantrepal.com" + game.image}
            alt={`${game.title} cover`}
          />
        </Card>
      </Section>
    )
  );
};
