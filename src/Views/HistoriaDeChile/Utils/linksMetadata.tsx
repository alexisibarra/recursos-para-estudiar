export interface ILinkMetadata {
  url: string;
  title: string;
}

export const linksMetadata: Record<string, ILinkMetadata[]> = {
  congresoNacional: [
    {
      url: "http://www.memoriachilena.gob.cl/602/w3-article-596.html",
      title: "El Congreso Nacional de Chile (1811-1925)",
    },
    {
      url: "https://www.senado.cl/notas-de-contexto-historico/los-quiebres-institucionales-que-significaron-el-fin-de-la-democracia-y",
      title:
        "Los quiebres institucionales que significaron el fin de la democracia y el cierre del Congreso",
    },
  ],
  privatizacionEmpresasEstateles: [
    {
      url: "https://radio.uchile.cl/2016/05/20/el-turbio-proceso-de-privatizacion-de-empresas-estatales-durante-la-dictadura/",
      title:
        "El irregular proceso de privatización de empresas estatales durante la dictadura",
    },
    {
      url: "https://www.eltiempo.com/archivo/documento/MAM-196956",
      title: "PRIVATIZACIÓN EN CHILE: UN BUEN EJEMPLO",
    },
  ],
  pueblosOriginarios: [
    {
      title: "Cultura y pueblos originarios",
      url: "https://chile.gob.cl/iran/sobre-chile/cultura-y-pueblos-originarios",
    },
  ],
  sugrafioFemenino: [
    {
      title: "Sufragio femenino en Chile",
      url: "https://es.wikipedia.org/wiki/Sufragio_femenino_en_Chile",
    },
  ],
  regimenParlamentario: [
    {
      title: "República Parlamentaria (Chile)",
      url: "https://es.wikipedia.org/wiki/Rep%C3%BAblica_Parlamentaria_(Chile)",
    },
  ],
  // name: [
  //   {
  //     title: "",
  //     url: "",
  //   },
  // ],
};
