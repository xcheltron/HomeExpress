import { configDotenv } from "dotenv";

export function configuraciones (){
    configDotenv();
    const PORT = process.env.PORT
    const HOST = process.env.DB_HOST
    const PASS = process.env.DB_PASS
    const USER = process.env.DB_USER
    const DATA = process.env.DB_DATA
    return {PORT, HOST, PASS, USER, DATA}
}