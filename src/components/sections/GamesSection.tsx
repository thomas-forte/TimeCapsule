import { useEffect, useState } from "react";
import classNames from "classnames";

// components
import { Section, SectionProps } from "./Section";
import { Card } from "../cards/Card";
import { PosterCard } from "../cards/PosterCard";
import { CardTitle } from "../cards/CardTitle";
import { CardDate } from "../cards/CardDate";
import { CardInlineImage } from "../cards/CardInlineImage";
import { CardInlineImages } from "../cards/CardInlineImages";

// config
import { config } from "../../config";

// types
import { Game } from "../../types/game.type";

// data
import games from "../../assets/games.json";

export const GamesSection = ({ date, decade, compactMode }: SectionProps) => {
  const [game, setGame] = useState<Game | null>(null);
  const [flip, setFlip] = useState(false);

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
      return <CardInlineImages imgs={game.awards} className="max-h-[8dvh]" />;
    }
  }

  function getGameCompanies(game: Game, landscape = false) {
    if (landscape) {
      return (
        <img
          className="max-h-[10dvh] max-w-full flex-[.5]"
          src={config.assetsRoot + game.companies[0].url}
          alt={game.companies[0].tooltip}
          title={game.companies[0].tooltip}
        />
      );
    } else {
      return (
        <CardInlineImages
          imgs={game.companies}
          className="max-w-[35%] max-h-[10dvh]"
        />
      );
    }
  }

  function getGameRating(game: Game, landscape = false) {
    if (landscape || !game.esrb) {
      return <></>;
    } else {
      return (
        <CardInlineImage img={game.esrb} className="max-w-[40%] max-h-[9dvh]" />
      );
    }
  }

  if (!game) {
    return <></>;
  }

  const isLandscape = !compactMode && game.landscape;

  return (
    <Section
      compactMode={compactMode}
      flip={flip}
      onClick={() => setFlip(!flip)}
      landscape={isLandscape}
      frontCard={
        <Card
          decade={decade}
          compactMode={compactMode}
          className={classNames({
            "flex justify-around items-center gap-[2dvw]": isLandscape,
          })}
        >
          <CardDate>Game of {date.getFullYear()}:</CardDate>
          {getAwards(game, isLandscape)}
          <CardTitle className={`title-text header-font-${decade}`}>
            {game.title}
          </CardTitle>
          {getGameCompanies(game, isLandscape)}
          {getGameRating(game, isLandscape)}
        </Card>
      }
      backCard={
        <PosterCard
          decade={decade}
          src={config.assetsRoot + game.image}
          alt={`${game.title} cover`}
          landscape={game.landscape}
          compactMode={compactMode}
          zoomDialogTitle={`${game.title} (${date.getFullYear()})`}
        />
      }
    />
  );
};
