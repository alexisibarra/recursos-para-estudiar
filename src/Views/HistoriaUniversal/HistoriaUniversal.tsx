import React, { FC } from "react";

import Section from "Components/Section";
import { cardsMetadata } from "./Utils/cardsMetadata";

const HistoriaUniversal: FC = () => (
  <Section title="Historia Universal" cardsMetadata={cardsMetadata} />
);

export default HistoriaUniversal;
