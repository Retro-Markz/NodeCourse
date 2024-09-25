// routes/aboutRoutes.mjs
import { Router } from "express";

const router = Router();

// Ruta de "Acerca de"
router.get("/about", (req, res) => {
  res.send("Ruta Acerca de - Aquí va información sobre nosotros.");
});

export default router;
