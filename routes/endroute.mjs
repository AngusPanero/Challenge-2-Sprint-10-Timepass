import express from "express"
import validarHora from "../middlewares/validarHora.mjs"; // Ruta correcta hacia el middleware
const router = express.Router()

router.get("/endroute", validarHora, (req, res) => {
    res.send(`
        <h1>Bienvenido, Llegaste al Final</h1>
        <p>Accediste a Tiempo.</p>
    `);
});

export default router;