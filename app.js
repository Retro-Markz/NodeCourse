// Importar paquetes
import express from "express";
import bodyParser from "body-parser";

// Crear la aplicación express
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
//crear rutas

app.use("/add-product", (req, res, next) => {
  res.send("<h1>add product</h1>");
  next();
});

app.post("/product", (req, res, next) => {
  res.send("<h1>product</h1>");
  next();
});

app.use("/", (req, res, next) => {
  res.send("<h1>home</h1>");
  next();
});

// Exportar el módulo app para usarlo en server.mjs
export default app;
