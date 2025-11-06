//Todos los imports
import express from 'express'
import { configuraciones } from './Configurations.js'; //Imports de configuracion de dotenv

import userRoutes from './routes/users.routes.js'

const app = express();

app.use('/users', userRoutes)

const {PORT} = configuraciones();

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`)
})