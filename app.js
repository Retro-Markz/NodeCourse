// Importar express y path
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { Router } from "express";
const router = Router();
// Importar las rutas
import homeRoutes from "./routes/home.js";
import aboutRoutes from "./routes/about.js";
import contactRoutes from "./routes/contact.js";
import productsRoutes from "./routes/product.js";

// Crear la aplicación express
const app = express();

// Obtener la ruta del directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir archivos estáticos desde la carpeta 'public'
router.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// Usar las rutas importadas
app.use(homeRoutes);
app.use(aboutRoutes);
app.use(contactRoutes);
app.use(productsRoutes);

// Exportar el módulo app para usarlo en server.mjs
export default app;
