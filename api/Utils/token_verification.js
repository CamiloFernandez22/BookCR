import jwt from "jsonwebtoken";
import {createError} from "../utils/error.js"

//Se va a crear una funcion para verificar el token generado. 
export const token_verification = (req, res, next) =>{
    const token = req.cookies.access_token;
}