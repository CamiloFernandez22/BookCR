import express from "express";
/*En esta ruta vamos a crear la autorizacion y autenticacion para asegurar que 
solo los usuarios que tengan su token puedan acceder a su endpoint especifico*/

//Aqui se va a instanciar la constante router que usa una funcion de express para aceptar los request del API
const router = express.Router();

router.get("/", (req,res)=>{
    res.send("Este es el endpoint de autenticacion")
})
export default router
