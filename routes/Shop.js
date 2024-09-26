import { Router } from "express";
import path from "path";
import { fileURLToPath } from "url";

const router = Router();

// Obtener la ruta del directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/shop", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../views/shop.html"));
});

export default router;
