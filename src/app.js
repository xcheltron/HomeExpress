//Todos los imports
import express from 'express'
import { configuraciones } from './Configurations.js'; //Imports de configuracion de dotenv
import userRoutes from './routes/users.routes.js'

const {PORT} = configuraciones();
const app = express();
app.use(express.json());

app.use('/public', express.static('public'));
app.use('/users', userRoutes)

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`)
})