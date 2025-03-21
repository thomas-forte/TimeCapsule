import { PropsWithChildren, ReactNode } from "react";
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
  frontCard: ReactNode;
  backCard: ReactNode;
  flip: boolean;
  onClick?: () => void;
}

const renderSection = (
  frontCard: ReactNode,
  backCard: ReactNode,
  compactMode: boolean,
  flip: boolean
) => {
  if (compactMode) {
    return flip ? backCard : frontCard;
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
  onClick,
  flip,
}: BaseSectionProps) => (
  <div
    className={classNames(
      "section",
      "min-w-full min-h-full",
      "flex gap-[2dvh] justify-around items-center",
      "snap-center",
      {
        "flex-col": landscape,
        "flex-row": !landscape,
      }
    )}
    onClick={compactMode ? onClick : undefined}
  >
    {renderSection(frontCard, backCard, compactMode || false, flip)}
  </div>
);
