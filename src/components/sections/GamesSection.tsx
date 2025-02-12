import { useEffect, useState } from "react";
import classNames from "classnames";

import { Section, SectionProps } from "./Section";
import { Card } from "./Card";
import { ZoomDialog } from "../ZoomDialog";

import { config } from "../../config";
import games from "../../assets/games.json";

type Game = {
  awards: string[];
  title: string;
  esrb: string;
  creator: string;
  companies: string[];
  image: string;
  landscape?: boolean;
};

export const GamesSection = ({ date, decade }: SectionProps) => {
  const [game, setGame] = useState<Game | null>(null);
  const [isOpen, setIsOpen] = useState(false);

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
      <Section name="games" landscape={game.landscape}>
        <Card
          decade={decade}
          className={classNames(!game.landscape && "w-2/5")}
        >
          <div className="top-text">Game of {date.getFullYear()}:</div>
          {game.awards.length && (
            <div className="flex flex-wrap justify-center gap-[2dvw] mt-[2dvh] mx-[2dvw]">
              {game.awards.map((awardUrl, index) => (
                <img
                  key={game.title + "award" + index}
                  className="max-h-[8dvh]"
                  src={config.assetsRoot + awardUrl}
                  alt="game award image"
                />
              ))}
            </div>
          )}
          <div className={`title-text header-font-${decade}`}>{game.title}</div>
          <p className="body-text">By {game.creator}</p>
          {!game.landscape && (
            <div className="flex flex-wrap justify-center mt-[2dvh]">
              {game.companies.map((companyUrl, index) => (
                <img
                  className="max-w-[35%] max-h-[10dvh] m-[3%]"
                  key={game.title + index}
                  src={config.assetsRoot + companyUrl}
                  alt="game company icon"
                />
              ))}
            </div>
          )}
          {game.esrb && (
            <div className="flex flex-wrap justify-center mt-[2dvh]">
              <img
                className="max-w-[40%] max-h-[4dvh] m-[3%]"
                src={config.assetsRoot + game.esrb}
                alt="esrb rating"
              />
            </div>
          )}
        </Card>
        <Card decade={decade} className="poster">
          <img
            className="game-cover cursor-zoom-in"
            src={config.assetsRoot + game.image}
            alt={`${game.title} cover`}
            onClick={() => setIsOpen(true)}
          />
          <ZoomDialog
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            imgSrc={config.assetsRoot + game.image}
            imgAlt={`${game.title} cover`}
          />
        </Card>
      </Section>
    )
  );
};
