import express from "express";
/*En esta ruta vamos a crear los users*/
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/User.js";
import { token_verification, verifyAdmin, verifyUser } from "../Utils/token_verification.js";

//Aqui se va a instanciar la constante router que usa una funcion de express para aceptar los request del API
const router = express.Router();

//Cuando se usa el endpoint de verificar auth se usa el middleware de token_verification para validar el token obtenido de los cookies
//si la verificacion del token es exitosa entonces se obtiene el acceso como usuario.
/*router.get("/checkauth", token_verification,(req,res,next)=>{
    res.send("Hello user, authentication successful")
})

router.get("/checkuser/:id", verifyUser ,(req,res,next)=>{
    res.send("Hello user, authentication successful, you can delete account")
})

router.get("/checkadmin/:id", verifyAdmin ,(req,res,next)=>{
    res.send("Hello admin, authentication successful, you can delete any account")
})
*/

//************************************************************************************************************************************ */
//UPDATE se va a crear metodo de actualizar datos 

router.put("/:id", verifyUser, updateUser);

//************************************************************************************************************************************ */

//DELETE

router.delete("/:id", verifyUser, deleteUser);

//************************************************************************************************************************************ */

//GET

router.get("/:id", verifyUser, getUser);

//************************************************************************************************************************************ */

//GET ALL

router.get("/", verifyAdmin, getUsers);

export default router

