import express from "express";
import Hotel from "../models/Hotel.js";
/*En esta ruta vamos a crear los hoteles*/

//Aqui se va a instanciar la constante router que usa una funcion de express para aceptar los request del API
const router = express.Router();

//CREATE, se va a conectar con la BD para crear una coleccion de manera asincrona ya que no se hace inmediatamente. 
router.post("/", async (req,res)=>{

    //Aqqui se obtiene la informacion del hotel del usuario.
    const newHotel = new Hotel(req.body) //request es lo que se obtiene del usario.
                                        //body es donde se va a almacenar la informacion del objeto. 

    //Aqui vamos a manejar cualquier error al hacer la operacion de create
    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    }catch(err){
        res.status(500).json(err)
    }
})
//UPDATE
//DELETE
//GET
//GET ALL

export default router
