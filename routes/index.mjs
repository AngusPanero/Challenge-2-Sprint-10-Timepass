import express from "express";
import horaMiddleware from "../middlewares/horaMiddleware.mjs"
import validarHora from "../middlewares/validarHora.mjs"
const router = express.Router()

router.get("/", horaMiddleware, (req, res) => {
    const horas = res.locals.hora
    const minutos = res.locals.minuto
    const mensaje = req.query.mensaje;

    res.send(`
        <h1>Bienvenido al Inicio</h1>
        <p>Son las ${horas}:${minutos}</p>
        ${mensaje ? `<p style="color:red">${decodeURIComponent(mensaje)}</p>` : ""}
        <a href="/endroute">Entrar</a>
        `)
    
})

export default router



