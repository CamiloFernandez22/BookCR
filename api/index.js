//Aqui se va a crear la aplicacion

//Se van a usar modulos de import y export, para eso se agrego del modulo en el package.json
import express from "express";

//Se agrega libreria dotenv que sirve para cargar variables del archivo .env 
import dotenv from "dotenv";

//Se agrega libreria de mongoose para trabajar la base de datos. 
import mongoose from "mongoose";

//Se importa el archivo de ruta de autenticacion para poder llamarla dentro de index. 
import authRoute from "./routes/auth.js";

//Se importa el archivo de ruta de hotels para poder llamarla dentro de index. 
import hotelsRoute from "./routes/hotels.js";

//Se importa el archivo de ruta de rooms para poder llamarla dentro de index. 
import roomsRoute from "./routes/rooms.js";

//Se importa el archivo de ruta de users para poder llamarla dentro de index. 
import usersRoute from "./routes/users.js";

//Aqui se declara la variable de app.
const app = express();
dotenv.config();

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
});

//Se hace funcion con mongoose para que nos indique si la conexion con MongoDB esta conectada, esto sirve para hacer troubleshoot. 
mongoose.connection.on("connected", ()=>{
    console.log("mongoDB conectado")
});

//Aqui se va a crear endpoint para el API, se referencio la informacion de: https://apidog.com/blog/how-to-create-a-rest-api-with-node-js-and-express/?utm_source=google_dsa&utm_medium=g&utm_campaign=20556541359&utm_content=160582184041&utm_term=&gad_source=1&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNaXlLB9yPy99rdt5MsnZl-SQSbPU9EAdG2-lnk9hA_IkII59RSgjbBoCFUYQAvD_BwE
//Aqui se define la ruta del API que responde con un mensaje de tipo JSON por medio de un GET. 
app.get("/", (req,res)=>{
  res.send("Hola, este es el primer request!")
})

//Middlewares

app.use(express.json());

//Este middleware nos sirve para hacer uso de la ruta Auth.
app.use("/auth", authRoute); 

//Este middleware nos sirve para hacer uso de la ruta hoteles.
app.use("/api/hotels", hotelsRoute); 

//Este middleware nos sirve para hacer uso de la ruta Rooms.
app.use("/rooms", roomsRoute);

//Este middleware nos sirve para hacer uso de la ruta users.
app.use("/users", usersRoute);

//Aqui se van manejar los errores para el api request
app.use((err, req, res, next)=>{
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Hubo un error"
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

//Vamos a crear la conexion con el puerto de la applicacion, se corre "npm start" en terminal o bash
app.listen(8800,()=>{
    connect(); //aqui se llama la funcion creada en la linea 10-16.
    console.log("Conectado al backend");
});