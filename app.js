// Importar paquetes
import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import path from "path";

// Crear la aplicación express
const app = express();

//set the view engine

app.set("view engine", "pug");
app.set("views", "views");

//importar las rutas
import adminRouter from "./routes/Admin.js";
import shopRouter from "./routes/Shop.js";

// Obtener la ruta del directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));

//usar las rutas importadas
app.use("/admin", adminRouter);
app.use(shopRouter);

//add 404 page route
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "/views/404.html"));
});

// Exportar el módulo app para usarlo en server.js
export default app;

//continue in vide 80
