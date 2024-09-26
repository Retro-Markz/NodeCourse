// Importar paquetes
import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";

//importar las rutas
import adminRouter from "./routes/Admin.js";
import shopRouter from "./routes/Shop.js";
import path from "path";

// Obtener la ruta del directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Crear la aplicación express
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

//usar las rutas importadas
app.use("/admin", adminRouter);
app.use(shopRouter);

//add 404 page route
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "/views/404.html"));
});

// Exportar el módulo app para usarlo en server.mjs
export default app;
