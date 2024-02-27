//Aqui se va a crear la aplicacion
//Se van a usar modulos de import y export, para eso se agrego del modulo en el package.json
import express from "express"
//Se agrega libreria dotenv que sirve para cargar variables del archivo .env 
import dotenv from "dotenv"
const app = express()
dotenv.config()
//Vamos a crear la conexion con el puerto de la applicacion, se corre "npm start" en terminal o bash
app.listen(8800,()=>{
    console.log("Conexion al backend")
})