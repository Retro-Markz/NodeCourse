import { Router } from "express";
const router = Router();
import path from "path";
import { fileURLToPath } from "url";

// Obtener la ruta del directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../views/add-product.html"));
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../views/add-product.html"));
});

export default router;
