import React, { FC } from "react";

import { Grid, Typography } from "@mui/material";

import { cardsMetadata } from "./Utils/linksMetadata";

import SectionCard from "../../Components/SectionCard";

const HistoriaDeChile: FC = () => (
  <Grid container spacing={4} sx={{ marginTop: 0 }}>
    <Grid item xs={12}>
      <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
        Historia de Chile
      </Typography>
    </Grid>

    {cardsMetadata.map(({ title, links, content }) =>
      title ? (
        <Grid item xs={12} md={6}>
          <SectionCard title={title} content={content} linksMetadata={links} />
        </Grid>
      ) : (
        <></>
      )
    )}
  </Grid>
);

export default HistoriaDeChile;
