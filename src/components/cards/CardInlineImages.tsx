// config
import { config } from "../../config";

// types
import { ImageBase } from "../../types/image-base.type";

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
