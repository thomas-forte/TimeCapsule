import { useEffect, useState } from "react";

import { Section, SectionProps } from "./Section";
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
        <div className={`card one bg-${decade} bd-${decade}`}>
          <div className={`text-center bf-${decade}`}>
            Best Selling Video Game:
          </div>
          <div className={`text-center my-[1vw] hf-${decade}`}>
            {game.title}
          </div>
          <p className={`text-center indent-[5vw] bf-${decade} body mb-[1vw]`}>
            By {game.creator}
          </p>
        </div>
        <div className={`card two poster bg-${decade} bd-${decade}`}>
          <img
            className="game-cover"
            src={"https://timecapsule.brendantrepal.com" + game.image}
            alt=""
          />
        </div>
      </Section>
    )
  );
};
