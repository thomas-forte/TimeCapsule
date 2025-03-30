import { cloneElement, PropsWithChildren, useState } from "react";
import classNames from "classnames";

// types
import { Decade } from "../../types/decade.type";

export interface SectionProps extends PropsWithChildren {
  date: Date;
  decade: Decade | null;
  compactMode?: boolean;
}

interface BaseSectionProps {
  compactMode?: boolean;
  landscape?: boolean;
  frontCard: JSX.Element;
  backCard?: JSX.Element;
}

const renderSection = (
  frontCard: JSX.Element,
  backCard: JSX.Element | undefined,
  compactMode: boolean,
  flip: boolean,
  flipping: boolean
) => {
  if (compactMode) {
    return flip
      ? cloneElement(backCard ?? <></>, { flipping })
      : cloneElement(frontCard, { flipping });
  } else {
    return (
      <>
        {frontCard}
        {backCard}
      </>
    );
  }
};

export const Section = ({
  compactMode,
  landscape,
  frontCard,
  backCard,
}: BaseSectionProps) => {
  const [flip, setFlip] = useState(false);
  const [flipping, setFlipping] = useState(false);

  const onClick = () => {
    if (!compactMode) return;
    if (backCard === undefined) return;
    if (flipping) return;

    setFlipping(true);
    setTimeout(() => {
      setFlip(!flip);
      setFlipping(false);
    }, 2000);
  };

  return (
    <div
      className={classNames(
        "section",
        "min-w-full min-h-full",
        "flex gap-[2dvh] justify-around items-center",
        "snap-center",
        {
          "flex-col": landscape && !compactMode,
          "flex-row": !landscape || compactMode,
        }
      )}
      onClick={onClick}
    >
      {renderSection(frontCard, backCard, compactMode || false, flip, flipping)}
    </div>
  );
};
