import { PropsWithChildren } from "react";

export const CardSubtitle = ({ children }: PropsWithChildren) => (
  <div className="text-center text-[2.5dvh] mb-[2dvh] italic">{children}</div>
);
