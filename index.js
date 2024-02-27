//Aqui se va a crear la aplicacion
//Se van a usar modulos de import y export, para eso se agrego del modulo en el package.json
import express from "express"
//Se agrega libreria dotenv que sirve para cargar variables del archivo .env 
import dotenv from "dotenv"
//Se agrega libreria de mongoose para trabajar la base de datos. 
import mongoose from "mongoose"

//Se va a realizar la conexion de moongose tal como lo indica la pagina oficial de Mongoose
const connect = async () => { //Esta es la funcion que se llamara cuando se conecte la app a la BD. 
  try{
    await mongoose.connect(process.env.MONGO); //se pasa como parametro la constante donde se coloco el link de connexion de Mongodb
    console.log("Conectado a mongodb") //Este es el mensaje de conexion a la base de datos/.
  }catch (error){
    throw error; //Se modifica para que en caso de haber un error la conexion se caiga 
  }
};

//Se hace funcion con mongoose para que nos indique si la conexion con MongoDB se cayo, esto sirve para hacer troubleshoot. 
mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB desconectado")
})

//Se hace funcion con mongoose para que nos indique si la conexion con MongoDB esta conectada, esto sirve para hacer troubleshoot. 
mongoose.connection.on("connected", ()=>{
    console.log("mongoDB conectado")
})

const app = express()
dotenv.config()
//Vamos a crear la conexion con el puerto de la applicacion, se corre "npm start" en terminal o bash
app.listen(8800,()=>{
    connect() //aqui se llama la funcion creada en la linea 10-16.
    console.log("Conectado al backend")
})