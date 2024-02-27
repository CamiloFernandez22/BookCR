//Aqui se va a crear la aplicacion
//Se van a usar modulos de import y export, para eso se agrego del modulo en el package.json
import express from "express"
const app = express()

//Vamos a crear la conexion con el puerto de la applicacion 
app.listen(8800,()=>{
    console.log("Conexion al backend")
})