import mysql2 from 'mysql2'
import { configuraciones } from './Configurations.js'

const {HOST} = configuraciones();
const {USER} = configuraciones();
const {DATA} = configuraciones();
const {PASS} = configuraciones();

const connection = mysql2.createConnection({
    host:HOST,
    user:USER,
    password:PASS,
    database:DATA
})

connection.connect((err) =>{
    if (err){
        console.error("❌No se pudo realizar la coneccion con la base de datos'", err)
        return
    } console.log('✅ Conexion realizada con exito')
})

export default connection
