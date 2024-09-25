// Importar http y las rutas de app.mjs
import http from "http";
import app from "./app.js";

// Especificar el puerto
const PORT = 3000;

// Crear el servidor usando app como manejador de rutas
const server = http.createServer(app);

// Iniciar el servidor
server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
