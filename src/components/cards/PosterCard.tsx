import { useState } from "react";
import classNames from "classnames";

// components
import { BaseCardProps } from "./Card";
import { ZoomDialog } from "../ZoomDialog";

// styles
import styles from "./Card.module.css";

export interface PosterProps extends BaseCardProps {
  src: string;
  alt: string;
  compactMode?: boolean;
  zoomDialogTitle?: string;
}

export const PosterCard = ({
  decade,
  className,
  src,
  alt,
  landscape,
  compactMode,
  zoomDialogTitle,
  flipping,
}: PosterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={classNames(
        landscape ? "max-w-full" : "h-full",
        "p-[1vw]",
        "break-words overflow-hidden",
        `border border-solid rounded border-${decade}`,
        `background-${decade}`,
        styles.cardAnimation,
        flipping && styles.out,
        className
      )}
    >
      <img
        className={classNames(
          "max-h-full border-solid border-inherit border-thin border-black",
          {
            "cursor-zoom-in": !compactMode,
          }
        )}
        src={src}
        alt={alt}
        onClick={() => (compactMode ? null : setIsOpen(true))}
      />
      <ZoomDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        imgSrc={src}
        imgAlt={alt}
        title={zoomDialogTitle}
      />
    </div>
  );
};
