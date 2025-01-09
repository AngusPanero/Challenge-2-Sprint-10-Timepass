import express from "express";
import horaMiddleware from "../middlewares/horaMiddleware.mjs"
import validarHora from "../middlewares/validarHora.mjs"
const router = express.Router()

router.get("/", horaMiddleware, (req, res) => {
    const horas = res.locals.horaFormat
    const minutos = res.locals.minutoFormat
    const mensaje = req.query.mensaje; // traigo el mensaje de validarHora que estaba codificado sin esto y esar el decode abajo me daria error al entrar en el boton (Entrar)

    res.send(`
        <h1>Bienvenido al Inicio</h1>
        <p>Son las ${horas}:${minutos}</p>
        ${mensaje ? `<p>${decodeURIComponent(mensaje)}</p>` : ""}
        <a href="/endroute">Entrar</a>
        `)
    
})

export default router



