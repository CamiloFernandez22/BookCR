import express from "express";
import Hotel from "../models/Hotel.js";
/*En esta ruta vamos a crear los hoteles*/

//Aqui se va a instanciar la constante router que usa una funcion de express para aceptar los request del API
const router = express.Router();

// Fuente para operaciones CRUD: https://cleverzone.medium.com/performing-crud-operations-in-node-js-and-express-js-with-mongodb-4ea71da2100a

//************************************************************************************************************************************** */
//CREATE, se va a conectar con la BD para crear una coleccion de manera asincrona ya que no se hace inmediatamente. 
router.post("/", async (req,res)=>{

    //Aqqui se obtiene la informacion del hotel del usuario.
    const newHotel = new Hotel(req.body) //request es lo que se obtiene del usario.
                                        //body es donde se va a almacenar la informacion del objeto. 

    //Aqui vamos a manejar cualquier error al hacer la operacion  metodo create
    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    }catch(err){
        res.status(500).json(err)
    }
});

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

router.get("/", async (req,res)=>{

    //Aqui vamos a manejar cualquier error al hacer la operacion de metodo update
    try{
        //Aqui estamos buscando todos los hoteles existentes.
    const hotels = await Hotel.find();
        res.status(200).json(hotels);
    }catch(err){
        res.status(500).json(err)
    }
});

export default router
