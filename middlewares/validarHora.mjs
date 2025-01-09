import horaMiddleware from "./horaMiddleware.mjs"

const validarHora = (req, res, next) => {
    if ((res.locals.hora >= 12) && (res.locals.hora <= 23)) {
        next();
    } else{
        res.locals.mensaje = "Aún No Son Las 12 de la Mañana";
        return res.redirect("/?mensaje=" + encodeURIComponent(res.locals.mensaje)) // Acá es para que aparezca en el link de arriba el mansaje codificado y seguro con el UriComponent
    }
}

export default validarHora;