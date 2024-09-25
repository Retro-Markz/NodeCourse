// routes/homeRoutes.mjs
import { Router } from "express";

const router = Router();

// Ruta principal
router.get("/", (req, res) => {
  res.send("Ruta principal - ¡Hola, Mundo!");
});

export default router;
