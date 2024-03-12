import express from "express";
import { createHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
/*En esta ruta vamos a crear los hoteles*/

//Aqui se va a instanciar la constante router que usa una funcion de express para aceptar los request del API
const router = express.Router();

//************************************************************************************************************************************** */
//CREATE, a travez de la funcion createHotel se va a conectar con la BD para crear una coleccion de manera asincrona ya que no se hace inmediatamente. 
router.post("/", createHotel);

//************************************************************************************************************************************ */
//UPDATE se va a crear metodo de actualizar datos 

router.put("/:id", async (req,res)=>{

    //Aqui vamos a manejar cualquier error al hacer la operacion de metodo update
    try{
        //Aqui estamos buscando al hotel por el numero de ID, para luego actualizarlo con el metodo de Mongo SET,
        // indicando que se va actualizar el body, tambien se le pasa el parametro de "new" para que no haga un query cada vez que se actualizan los datos.
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        res.status(200).json(updatedHotel)
    }catch(err){
        res.status(500).json(err)
    }
});

//************************************************************************************************************************************ */

//DELETE

router.delete("/:id", async (req,res)=>{

    //Aqui vamos a manejar cualquier error al hacer la operacion de metodo update
    try{
        //Aqui estamos buscando al hotel por el numero de ID, para luego borrarlo.
    await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel deleted.")
    }catch(err){
        res.status(500).json(err)
    }
});

//************************************************************************************************************************************ */

//GET

router.get("/:id", async (req,res)=>{

    //Aqui vamos a manejar cualquier error al hacer la operacion de metodo update
    try{
        //Aqui estamos buscando un hotel en especifico por el numero de ID.
    const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel)
    }catch(err){
        res.status(500).json(err)
    }
});

//************************************************************************************************************************************ */

//GET ALL

router.get("/", async (req,res, next)=>{

    //const failed = true;
    //if(failed) return next(err);

    //Aqui vamos a manejar cualquier error al hacer la operacion de metodo update
    try{
        //Aqui estamos buscando todos los hoteles existentes.
    const hotels = await Hotel.find();
        res.status(200).json(hotels);
    }catch(err){
        next(err)
    }
});

export default router
