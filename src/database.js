import mysql2 from 'mysql2'

const connection = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "homeStore"
})

connection.connect((err) =>{
    if (err){
        console.error("❌No se pudo realizar la coneccion con la base de datos'", err)
        return
    } console.log('✅ Conexion realizada con exito')
})

module.exports = connection