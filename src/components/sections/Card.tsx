import classNames from "classnames";
import { PropsWithChildren, useState } from "react";

// config
import { config } from "../../config";

// types
import type { Decade } from "../../types/decade.type";
import { ZoomDialog } from "../ZoomDialog";
import { ImageBase } from "../../types/image-base.type";

export interface BaseCardProps {
  decade: Decade | null;
  className?: string;
  landscape?: boolean;
}

export type CardProps = BaseCardProps & PropsWithChildren;

export const Card = ({ decade, className, children }: CardProps) => (
  <div
    className={classNames(
      "max-h-full max-w-full p-[1vw]",
      "break-words overflow-hidden",
      `border border-solid rounded border-${decade}`,
      `background-${decade}`,
      className
    )}
  >
    {children}
  </div>
);

export const CardDate = ({ children }: PropsWithChildren) => (
  <div className="text-center text-[2.5dvh]">{children}</div>
);

export interface CardTitleProps extends PropsWithChildren {
  className?: string;
}
export const CardTitle = ({ className, children }: CardTitleProps) => (
  <div className={classNames("text-center my-[2dvh] text-pretty", className)}>
    {children}
  </div>
);

export const CardSubtitle = ({ children }: PropsWithChildren) => (
  <div className="text-center text-[2.5dvh] mb-[2dvh] italic">{children}</div>
);

export const CardInfoText = ({ children }: PropsWithChildren) => (
  <div className="text-center text-[2.5dvh] mb-[2dvh]">{children}</div>
);

export interface CardInlineImageProps {
  img: ImageBase | null;
  className?: string;
}
export const CardInlineImage = ({ img, className }: CardInlineImageProps) => {
  if (!img) {
    return <></>;
  }
  return (
    <div className="flex flex-wrap justify-center mt-[2dvh] mx-[2dvw]">
      <img
        className={className}
        src={config.assetsRoot + img.url}
        alt={img.tooltip}
        title={img.tooltip}
      />
    </div>
  );
};

export interface CardInlineImagesProps {
  imgs: ImageBase[];
  className?: string;
}
export const CardInlineImages = ({
  imgs,
  className,
}: CardInlineImagesProps) => {
  if (!imgs.length) {
    return <></>;
  }
  return (
    <div className="flex flex-wrap justify-center mt-[2dvh] gap-[2dvw]">
      {imgs.map((img) => (
        <img
          className={className}
          style={img.inline_styles}
          key={img.url}
          src={config.assetsRoot + img.url}
          alt={img.tooltip}
          title={img.tooltip}
        />
      ))}
    </div>
  );
};

export interface PosterProps extends BaseCardProps {
  src: string;
  alt: string;
  zoomDialogTitle?: string;
}

export const Poster = ({
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
