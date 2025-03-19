import { useState } from "react";
import classNames from "classnames";

// components
import { BaseCardProps } from "./Card";
import { ZoomDialog } from "../ZoomDialog";

export interface PosterProps extends BaseCardProps {
  src: string;
  alt: string;
  zoomDialogTitle?: string;
}

export const PosterCard = ({
  decade,
  className,
  src,
  alt,
  zoomDialogTitle,
}: PosterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={classNames(
        "h-full p-[1vw]",
        "break-words overflow-hidden",
        `border border-solid rounded border-${decade}`,
        `background-${decade}`,
        className
      )}
    >
      <img
        className="max-h-full border-solid border-inherit border-thin border-black cursor-zoom-in"
        src={src}
        alt={alt}
        onClick={() => setIsOpen(true)}
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
