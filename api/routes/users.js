import express from "express";
/*En esta ruta vamos a crear los users*/
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/User.js";

//Aqui se va a instanciar la constante router que usa una funcion de express para aceptar los request del API
const router = express.Router();

//************************************************************************************************************************************ */
//UPDATE se va a crear metodo de actualizar datos 

router.put("/:id", updateUser);

//************************************************************************************************************************************ */

//DELETE

router.delete("/:id", deleteUser);

//************************************************************************************************************************************ */

//GET

router.get("/:id", getUser);

//************************************************************************************************************************************ */

//GET ALL

router.get("/", getUsers);

export default router

