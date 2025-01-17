import { useEffect, useState } from "react";
import classNames from "classnames";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

import { Section, SectionProps } from "./Section";
import { Card } from "./Card";

import { config } from "../../config";
import games from "../../assets/games.json";

type Game = {
  title: string;
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
        </Card>
        <Card decade={decade} className="poster">
          <img
            className="game-cover"
            src={config.assetsRoot + game.image}
            alt={`${game.title} cover`}
            onClick={() => setIsOpen(true)}
          />
        </Card>
        <Dialog
          open={isOpen}
          className="relative z-40 focus:outline-none"
          onClose={() => setIsOpen(false)}
        >
          <DialogBackdrop className="fixed inset-0 bg-black/70" />
          <div className="fixed inset-0 z-50 w-dvw h-dvh overflow-none">
            <div className="flex w-dvw h-dvh items-center justify-center p-4">
              <DialogPanel
                transition
                className="rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
              >
                <img
                  className="max-w-[80dvw] max-h-[90dvh]"
                  src={config.assetsRoot + game.image}
                  alt={`${game.title} cover`}
                />
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </Section>
    )
  );
};
