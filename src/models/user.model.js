import connection from '../database.js'

export const getUser = () =>{
    return new Promise ((resolve, reject) =>{
        connection.query("Select * from users", (err, results)=>{ 
            if (err) reject(err)
                else resolve(results)
        })
    })
}

export const signUp = (name, email, password_hash, estado) =>{
    return new Promise ((resolve, reject) => {
        console.log(name, email, password_hash, estado)
        connection.query("CALL Register_user(?,?,?,?)",[name,email,password_hash, estado],(err,results)=>{
            if (err) reject(err)
                else resolve(results)
        })
    })
}
