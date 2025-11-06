//Todos los imports
import express from 'express'
import { configuraciones } from './Configurations.js'; //Imports de configuracion de dotenv

const app = express();

const {PORT} = configuraciones();

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`)
})