// config
import { config } from "../../config";

// types
import { ImageBase } from "../../types/image-base.type";

export interface CardInlineImageProps {
  img: ImageBase | null;
  className?: string;
}
export const CardInlineImage = ({ img, className }: CardInlineImageProps) => {
  if (!img) {
    return <></>;
  }
  return (
    <div className="flex justify-center mt-[2dvh] mx-[2dvw]">
      <img
        className={className}
        src={config.assetsRoot + img.url}
        alt={img.tooltip}
        title={img.tooltip}
      />
    </div>
  );
};
