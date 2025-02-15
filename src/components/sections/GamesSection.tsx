import { useEffect, useState } from "react";
import classNames from "classnames";

import { Section, SectionProps } from "./Section";
import { Card } from "./Card";
import { ZoomDialog } from "../ZoomDialog";

import { config } from "../../config";
import games from "../../assets/games.json";

type Game = {
  awards: { url: string; tooltip: string }[] | null;
  title: string;
  esrb: { url: string; tooltip: string } | null;
  creator: string;
  companies: { url: string; tooltip: string }[];
  company_inline?: Record<string, string>;
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

  function getAwards(game: Game, landscape = false) {
    if (landscape || !game.awards) {
      return <></>;
    } else {
      return (
        <div className="flex flex-wrap justify-center gap-[2dvw] mt-[2dvh] mx-[2dvw]">
          {game.awards.map((award, index) => (
            <img
              key={game.title + "award" + index}
              className="max-h-[8dvh]"
              src={config.assetsRoot + award.url}
              alt={award.tooltip}
              title={award.tooltip}
            />
          ))}
        </div>
      );
    }
  }

  function getGameCompanies(game: Game, landscape = false) {
    if (landscape) {
      return (
        <div
          className="flex justify-center h-full w-[7dvw]"
          style={game.company_inline}
        >
          {game.companies.map((company, index) => (
            <img
              className="max-h-[10dvh] max-w-full"
              key={game.title + index}
              src={config.assetsRoot + company.url}
              alt={company.tooltip}
              title={company.tooltip}
            />
          ))}
        </div>
      );
    } else {
      return (
        <div className="flex flex-wrap justify-center mt-[2dvh] gap-[2dvw]">
          {game.companies.map((company, index) => (
            <img
              className="max-w-[35%] max-h-[10dvh]"
              key={game.title + index}
              src={config.assetsRoot + company.url}
              alt={company.tooltip}
              title={company.tooltip}
            />
          ))}
        </div>
      );
    }
  }

  function getGameRating(game: Game, landscape = false) {
    if (landscape || !game.esrb) {
      return <></>;
    } else {
      return (
        <div className="flex flex-wrap justify-center mt-[2dvh]">
          <img
            className="max-w-[40%] max-h-[9dvh]"
            src={config.assetsRoot + game.esrb.url}
            alt={game.esrb.tooltip}
            title={game.esrb.tooltip}
          />
        </div>
      );
    }
  }

  return (
    game && (
      <Section name="games" landscape={game.landscape}>
        <Card
          decade={decade}
          className={classNames(!game.landscape && "w-2/5")}
        >
          <div className="top-text min-w-[7dvw]">
            Game of {date.getFullYear()}:
          </div>
          {getAwards(game, game.landscape)}
          <div className={`title-text header-font-${decade}`}>{game.title}</div>
          {getGameCompanies(game, game.landscape)}
          {getGameRating(game, game.landscape)}
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
