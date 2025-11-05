import 'dotenv/config'

export function configuraciones (){
    const PORT = process.env.PORT
    return {PORT}
}