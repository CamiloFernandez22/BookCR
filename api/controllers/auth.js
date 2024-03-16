//Aqui se va a crear las funciones de autenticacion para la aplicacion web. 
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../Utils/error.js";
import jwt from "jsonwebtoken";

//Aqui se va a crear la funcion para el rigistro de usuarios 
export const register = async (req,res,next)=>{
    try{

        //Se usa bcryptjs para encripitar la contrasenna en un hash
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username:req.body.username, //Se va a mandar la informacion de username a validar 
            email:req.body.email, //Se va a mandar la informacion de email a validar 
            password: hash, //Se va a mandar la informacion de hash generado para la contrasenna a validar 
        })

        //Si la informacion es valida entonces vamos a implementar la siguiente funcion que devuelve status de creado
        await newUser.save();
        res.status(200).send("User created.");
    }catch(err){
        next(err);
    }
}
    export const login = async (req,res,next)=>{
        try{
            //Se va a crear una funcion para buscar a un usuario 
            const user = await User.findOne({username: req.body.username})

            //Aqui se va a crear un error que nos indique si el usuario que estamos buscando en la BD no existe
            if(!user) return next(createError(404, "User not found"))

            //Aqui usando una funcion asincrona lo que se va a hacer es verificar que la contrasenna coinicda con el hash creado con bcryptjs.
            const passwordVerification = await bcrypt.compare(req.body.password, user.password)

            //Aqui se va a crear un error que permita indicar que la contrasenna es incorrecta
            if(!passwordVerification) return next(createError(400, "The password or username is incorrect"));

            //Vamos a crear toke de JWT para el auth, por cada solicitud se va a mandar el token JWT para validar el id del usuario y si es admin o no. 
            const token = jwt.sign({id:user._id, isAdmin: user.isAdmin}, process.env.JWT);

            const {password, isAdmin, ...otherDetails} = user._doc;
            //Si todo sale bien entonces el usuario se despliega en el request. 
            res.cookie("access_token", token,{
                httpOnly: true, //Se implementa el htttp only como medida adicional de seguridad, esto no permite que data confidencial llegue al cookie. 
            }).status(200).json({...otherDetails});
        }catch(err){
            next(err);
        }
    
};