// routes/productsRoutes.mjs
import { Router } from "express";

const router = Router();

// Ruta de "Productos"
router.get("/products", (req, res) => {
  res.send("Ruta Productos - Aquí están nuestros productos.");
});

export default router;
