// routes/contactRoutes.mjs
import { Router } from "express";

const router = Router();

// Ruta de "Contacto"
router.get("/contact", (req, res) => {
  res.send("Ruta Contacto - ¡Ponte en contacto con nosotros!");
});

export default router;
