import express from "express";
import { register } from "../controllers/auth.js";
/*En esta ruta vamos a crear la autorizacion y autenticacion para asegurar que 
solo los usuarios que tengan su token puedan acceder a su endpoint especifico*/

//Aqui se va a instanciar la constante router que usa una funcion de express para aceptar los request del API
const router = express.Router();

//Aqui tenemos una ruta que va a indicar que se quiere crear un usuario
router.post("/register", register)
export default router
