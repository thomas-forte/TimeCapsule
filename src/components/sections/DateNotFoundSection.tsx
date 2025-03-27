import { Section, SectionProps } from "./Section";
import { Card } from "../cards/Card";

import { config } from "../../config";
import { CardDate } from "../cards/CardDate";
import { CardTitle } from "../cards/CardTitle";
import { CardInfoText } from "../cards/CardInfoText";

export const DateNotFoundSection = ({ date, decade }: SectionProps) => {
  if (date <= config.maximumDate) {
    return <></>;
  }

  return (
    <Section
      flip={false}
      frontCard={
        <Card decade={decade}>
          <CardDate>This date:</CardDate>
          <CardTitle className={`header-font-${decade}`}>
            {date.toLocaleDateString()}
          </CardTitle>
          <CardInfoText>Is not currently ready.</CardInfoText>
        </Card>
      }
    ></Section>
  );
};
