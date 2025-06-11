Dashboard de Proyectos Sector Agua - Prueba Técnica

Este proyecto es una interfaz de visualización tipo dashboard que permite gestionar y explorar información relacionada con proLa interfaz está construida con ReactJS y estilizada completamente con CSS personalizado sin el uso de librerías de estilos 

Estructura del Proyecto
/src
/components → Componentes reutilizables como Panels, Projects, Dashboards, etc.
/pages → Página principal Overview.jsx
/styles → Estilos centralizados en App.css
/data → Archivo mockData.js con datos simulados
App.js
index.js
router.js
README.md


Tecnologías Usadas
- Lenguaje: JavaScript
- Framework: ReactJS (Create React App)
- Estilos: CSS puro (sin frameworks)
- Datos simulados: mockData.js


Instalación y Ejecución
1. Clona este repositorio en tu máquina:
git clone https://github.com/tu-usuario/dashboard-api-luisas.git
cd dashboard-api-luisas
2. Instala las dependencias necesarias con el siguiente comando:
npm install
3. Una vez instaladas, inicia el servidor de desarrollo:
npm start
4. Esto abrirá la aplicación en tu navegador en:
http://localhost:3000
Funcionalidades principales
- Barra lateral fija: navegación entre secciones (Inicio, Seguridad, Proyectos, Paneles, Tableros, Fuentes, etc.).
- Barra superior contextual: muestra opciones adicionales según la sección seleccionada.
- Vista de proyectos: selecciona y visualiza detalles completos de cada proyecto.
- Paneles, tableros y fuentes de datos: filtrables por proyecto, con búsqueda rápida y presentación visual clara.
- Diseño responsivo y moderno: tarjetas animadas, iconografía, colores sobrios y distribución elegante.


Despliegue en producción
Para generar los archivos optimizados de producción, ejecuta:
npm run build
Esto creará la carpeta build/ lista para ser desplegada en servicios como:
- Vercel
- Netlify
- GitHub Pages
- o cualquier servidor de archivos estáticos
Autor
Desarrollado por PruebaLuisa como parte de una prueba técnica