import React, { FC } from "react";

import { cardsMetadata } from "./Utils/cardsMetadata";
import Section from "../../Components/Section";

const HistoriaDeChile: FC = () => (
  <Section title="Historia de Chile" cardsMetadata={cardsMetadata} />
);

export default HistoriaDeChile;
