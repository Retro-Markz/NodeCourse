// Importar express y path
import express from "express";

// Crear la aplicación express
const app = express();

//crear rutas
app.use((req, res, next) => {
  res.send("<h1>Hello</h1>");
  next();
});

// Exportar el módulo app para usarlo en server.mjs
export default app;
