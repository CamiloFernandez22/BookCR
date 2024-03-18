//Se crea este middleware para verificar si el token proporcionado por medio los cookies es valido o si tan si quiera existe un token. 
import jwt from "jsonwebtoken";
import {createError} from "../utils/error.js"

//Se va a crear una funcion para verificar el token generado por medio de los cookies. 
export const token_verification = (req, res, next) =>{
    const token = req.cookies.access_token;

    //Se comprueba que el token exista para que se pueda autentificar al usuario 
    if(!token){
        //Se va a crear un error nuevo que indique al usuario que no esta autuntificado. 
        return next(createError(401,"You are not authenticated"));
    }
    //Se va a crear una funcion que verifique si ya hay un token valido existente.
    jwt.verify(token,process.env.JWT,(err, user)=>{
        //Se va a crear un error que indique al usuario que el token proporcionado no es valido.
        if(err) return next(createError(403, "Invalid token"));

        //Si el token es valido y autorizado entonces se usa la siguiente propiedad
        req.user = user;
        next()

    });
};

//Se va a verificar al usuario
export const verifyUser = (req, res, next) =>{
//Se llama al middleware de Token_verfication para verficar si esta autentificado
token_verification(req,res, ()=>{
    //Si el usuario que manda la soliciutd es igual al id autorizado o si el usuario es admin entonces se valida y se pasa al siguiente argumento
    if(req.user.id === req.params.id || req.user.isAdmin){
        next();
    }else{
        //al no verificarse se crea este error que indica que no hay autorizacion
       return next(createError(403, "Authorization not granted"));
    }
});
}