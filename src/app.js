import express from 'express'
import { configuraciones } from './Configurations.js';

const app = express();

const {PORT} = configuraciones();

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`)
})