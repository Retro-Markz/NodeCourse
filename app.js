// Importar express y path
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Crear la aplicación express
const app = express();

// Obtener la ruta del directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, "public")));

// Rutas adicionales
app.get("/about", (req, res) => {
  res.send("Ruta Acerca de - Aquí va información sobre nosotros.");
});

app.get("/contact", (req, res) => {
  res.send("Ruta Contacto - ¡Ponte en contacto con nosotros!");
});

app.get("/products", (req, res) => {
  res.send("Ruta Productos - Aquí están nuestros productos.");
});

// Exportar el módulo app para usarlo en server.mjs
export default app;
