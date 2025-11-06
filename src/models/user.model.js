import connection from '../database.js'

export const getUser = () =>{
    return new Promise ((resolve, reject) =>{
        connection.query("Select * from users", (err, results)=>{ 
            if (err) reject(err)
                else resolve(results)
        })
    })
}
