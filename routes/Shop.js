import { Router } from "express";
import path from "path";
import { fileURLToPath } from "url";
import adminRouter from "./Admin.js";

import bodyParser from "body-parser";

const router = Router();

// Obtener la ruta del directorio actual
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

router.get("/shop", (req, res, next) => {
  let products = adminRouter.products;
  res.render("shop", { prods: products, docTitle: "shop" });
});

export default router;
