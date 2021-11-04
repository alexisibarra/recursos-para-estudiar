import React, { FC } from "react";
import { Grid, Typography } from "@mui/material";
import { ICardMetadata } from "Views/Utils/ICardMetadata";
import SectionCard from "./SectionCard";

interface ISectionProps {
  title: string;
  cardsMetadata: ICardMetadata[];
}

const Section: FC<ISectionProps> = (props) => {
  const { title: sectionTitle, cardsMetadata } = props;

  return (
    <Grid container spacing={4} sx={{ marginTop: 0 }}>
      <Grid item xs={12}>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          {sectionTitle}
        </Typography>
      </Grid>

      {cardsMetadata.map(({ title, links, content }) =>
        title ? (
          <Grid item xs={12} md={6}>
            <SectionCard
              title={title}
              content={content}
              linksMetadata={links}
            />
          </Grid>
        ) : (
          <></>
        )
      )}
    </Grid>
  );
};

export default Section;
