const horaMiddleware = (req, res, next) => {
    const hoy = new Date()
    const horas = hoy.getHours()
    const minutos = hoy.getMinutes()
    res.locals.hora = horas
    res.locals.minuto = minutos

    next()
}

export default horaMiddleware