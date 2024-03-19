import express from "express";
import { verifyAdmin } from "../Utils/token_verification.js";
import { createRoom, updateRoom, deleteRoom, getRoom, getRooms } from "../controllers/room.js";

/*En esta ruta vamos a crear los Rooms*/

//Aqui se va a instanciar la constante router que usa una funcion de express para aceptar los request del API
const router = express.Router();

//Se recicla codigo del archivo routes/Rooms ya que se cumplen las mismas rutas

//************************************************************************************************************************************** */
//CREATE, a travez de la funcion createRooms se va a conectar con la BD para crear una coleccion de manera asincrona ya que no se hace inmediatamente. 
router.post("/:hotelid", verifyAdmin, createRoom);

//************************************************************************************************************************************ */
//UPDATE se va a crear metodo de actualizar datos 

router.put("/:id", verifyAdmin, updateRoom);

//************************************************************************************************************************************ */

//DELETE

router.delete("/:id/:hotelid", verifyAdmin,deleteRoom);

//************************************************************************************************************************************ */

//GET

router.get("/:id", getRoom);

//************************************************************************************************************************************ */

//GET ALL

router.get("/", getRooms);

export default router
