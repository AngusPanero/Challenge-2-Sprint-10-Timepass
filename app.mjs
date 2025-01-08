import express from "express";
const app = express();

/* 
TENGO QUE IM0ORTAR INDEX.MJS Y ENDROUTE.MJS
app.get("/", (req, res) => {
    res.send(`El Peluca Sapeeeee`)
}) */

app.use((req, res) => {
    res.status(404).send(`<h1>Página no Encontrada - 404</h1>`)
})

const servidor = app.listen(3000, () => {
    console.log(`Respuesta Exitosa del Servidor, Puerto: ${servidor.address().port}`)
})