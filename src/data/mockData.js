export const projects = [
  {
    id: 1,
    name: "AGUA POTABLE Y SANEAMIENTO BÁSICO",
    description: "Proyecto nacional para mejorar el acceso al agua potable.",
    dataSources: ["MINVIVIENDA_AGUA_SANEAMIENTO"],
    createdAt: "2023-09-22",
    updatedAt: "2023-09-25",
    author: "PruebaLuisa",
    group: "AguaMinvivienda"
  },
  {
    id: 2,
    name: "GESTIÓN INTEGRAL DE CUENCAS HIDROGRÁFICAS",
    description: "Protección y gestión de cuencas hídricas.",
    dataSources: ["IDEAM_CUENCAS"],
    createdAt: "2023-08-15",
    updatedAt: "2023-09-05",
    author: "admin_cuencas",
    group: "AmbienteIDEAM"
  },
  {
    id: 3,
    name: "MEJORAMIENTO DE CALIDAD DEL AGUA RURAL",
    description: "Mejora de infraestructura para agua en zonas rurales.",
    dataSources: ["DNP_AGUA_RURAL"],
    createdAt: "2023-10-01",
    updatedAt: null,
    author: "admin_rural",
    group: "DNP_Rural"
  }
];

export const dataSources = [
  {
    id: "MINVIVIENDA_AGUA_SANEAMIENTO",
    name: "MINVIVIENDA - Agua y Saneamiento",
    type: "API REST",
    lastUpdate: "2023-09-28",
    totalRecords: 1280
  },
  {
    id: "IDEAM_CUENCAS",
    name: "IDEAM - Información Cuencas",
    type: "Archivo CSV",
    lastUpdate: "2023-09-10",
    totalRecords: 512
  },
  {
    id: "DNP_AGUA_RURAL",
    name: "DNP - Agua en Zonas Rurales",
    type: "Conexión directa",
    lastUpdate: "2023-10-02",
    totalRecords: 304
  }
];

export const panels = [
  {
    id: 1,
    projectId: 1,
    name: "ESTADO DE PROYECTOS 2023",
    description: "Seguimiento nacional de obras de acueducto.",
    createdAt: "2023-09-25",
    updatedAt: "2023-09-26",
    author: "PruebaLuisa",
    preview: "/img/panel1.jpg"
  },
  {
    id: 2,
    projectId: 2,
    name: "AVANCE CUENCAS RÍO MAGDALENA",
    description: "Reporte ambiental del IDEAM por subzonas.",
    createdAt: "2023-09-20",
    updatedAt: null,
    author: "admin_cuencas",
    preview: "/img/panel2.png"
  }
];

export const dashboards = [
  {
    id: 1,
    projectId: 1,
    name: "INDICADORES EN MATERIA DE AGUA POTABLE Y SANEAMIENTO BÁSICO V1",
    description: "Indicadores clave del sector agua.",
    createdAt: "2023-09-26",
    updatedAt: "2023-09-26",
    author: "PruebaLuisa",
    preview: "/img/tablero1.png"
  },
  {
    id: 2,
    projectId: 2,
    name: "ESTADO AMBIENTAL NACIONAL 2023",
    description: "Resumen de indicadores ambientales.",
    createdAt: "2023-09-21",
    updatedAt: null,
    author: "admin_cuencas",
    preview: "/img/tablero2.png"
  }
];
