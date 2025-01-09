const horaMiddleware = (req, res, next) => {
    const hoy = new Date()
    const horas = hoy.getHours()
    const minutos = hoy.getMinutes()
    let minutosFormat = String(minutos).padStart(2, "0");
    let horasFormat = String(horas).padStart(2, "0");

    res.locals.hora = horas
    res.locals.minuto = minutos
    res.locals.horaFormat = horasFormat
    res.locals.minutoFormat = minutosFormat

    console.log(typeof res.locals.hora, res.locals.hora)
    console.log(typeof res.locals.minuto, res.locals.minuto)

    next()
}

export default horaMiddleware