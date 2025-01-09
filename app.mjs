import express from "express";
import indexRouter from "./routes/index.mjs"
import endrouteRouter from "./routes/endroute.mjs"
const app = express();

app.use(indexRouter);
app.use(endrouteRouter);

app.use((req, res) => {
    res.status(404).send(`<h1>Página no Encontrada - 404</h1>`)
})

const servidor = app.listen(3000, () => {
    console.log(`Respuesta Exitosa del Servidor, Puerto: ${servidor.address().port}`)
})