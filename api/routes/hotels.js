import express from "express";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../Utils/token_verification.js";

/*En esta ruta vamos a crear los endpoints de los hoteles*/

//Aqui se va a instanciar la constante router que usa una funcion de express para aceptar los request del API
const router = express.Router();

//************************************************************************************************************************************** */
//CREATE, a travez de la funcion createHotel se va a conectar con la BD para crear una coleccion de manera asincrona ya que no se hace inmediatamente. 
router.post("/", verifyAdmin, createHotel);

//************************************************************************************************************************************ */
//UPDATE se va a crear metodo de actualizar datos 

router.put("/:id", verifyAdmin, updateHotel);

//************************************************************************************************************************************ */

//DELETE

router.delete("/:id", verifyAdmin,deleteHotel);

//************************************************************************************************************************************ */

//GET

router.get("/:id", getHotel);

//************************************************************************************************************************************ */

//GET ALL

router.get("/", getHotels);

export default router
