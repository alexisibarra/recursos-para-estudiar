import React, { FC } from "react";

import { Grid, Typography } from "@mui/material";

import { linksMetadata } from "./Utils/linksMetadata";

import SectionCard from "../../Components/SectionCard";

const HistoriaDeChile: FC = () => (
  <Grid container spacing={4} sx={{ marginTop: 0 }}>
    <Grid item xs={12}>
      <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
        Historia de Chile
      </Typography>
    </Grid>

    <Grid item xs={6}>
      <SectionCard
        title="Congreso nacional de Chile"
        linksMetadata={linksMetadata.congresoNacional}
      />
    </Grid>

    <Grid item xs={6}>
      <SectionCard
        title="Separación Iglesia y Estado"
        content={[
          "La Constitución de 1833 dice que: “La religión de la República de Chile es la católica, apostólica, romana; con exclusión del ejercicio público de cualquiera otra”. A lo largo del siglo llegaron inmigrantes con credos distintos al católico, anglicanismo y luteranismo por ejemplo. Esto, más el impulso de un sector de la sociedad de ideas liberales, en dirección hacia un secularismo llevó por ejemplo a la creación de la Ley Interpretativa de 1865",
          "Esta estableció que quienes no profesan la religión católica podían practicar su culto al interior de edificios de propiedad particular. Y que los extranjeros no católicos, llamados disidentes, podían sostener escuelas privadas para la enseñanza de sus propios hijos en la doctrina de sus religiones.",
          "60 años después con la Constitución de 1925 se estableció la separación de la Iglesia con el Estado. La Carta es muy similar a la actual Constitución. La Comisión Ortúzar, durante los años 70, señaló relevante mantener lo establecido en este punto.",
        ]}
      />
    </Grid>

    <Grid item xs={6}>
      <SectionCard
        title="Privatización de las empresas estateles"
        linksMetadata={linksMetadata.privatizacionEmpresasEstateles}
      />
    </Grid>

    <Grid item xs={6}>
      <SectionCard
        title="Pueblos originarios"
        linksMetadata={linksMetadata.pueblosOriginarios}
      />
    </Grid>

    <Grid item xs={6}>
      <SectionCard
        title="Sufragio Femenino en Chile"
        content={[
          "El Sufragio femenino en Chile hace referencia al derecho a votos de las mujeres de este país, que comienza con las elecciones municipales del año 1935 logrando en el año 1949 el Sufragio femenino irrestricto",
          "Se considera como punto de partida el Decreto Amunátegui del 6 de noviembre de 1877, que habilitó a la mujer a realizar estudios universitarios. Surgen poco a poco las profesionales pioneras de distintas áreas, que conceptualizan la inferioridad en que se encuentra la mujer.",
        ]}
        linksMetadata={linksMetadata.sugrafioFemenino}
      />
    </Grid>

    <Grid item xs={6}>
      <SectionCard
        title="Régimen Parlamentario"
        content={[
          "La República Parlamentaria o Régimen Parlamentario es un período de la historia de Chile que se extendió entre 1891 —cuando estalló la Guerra civil— y en 1925 —cuando se produjo el Golpe de Estado de 1924, que implicó la clausura del Congreso, y la promulgación de la Constitución de 1925, que estableció una República presidencial",
        ]}
        linksMetadata={linksMetadata.regimenParlamentario}
      />
    </Grid>
  </Grid>
);

export default HistoriaDeChile;
