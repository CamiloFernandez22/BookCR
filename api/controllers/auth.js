//Aqui se va a crear la funcion para el rigistro de usuarios 
import User from "../models/User.js"

export const register = async (req,res,next)=>{
    try{
        const newUser = new User({
            username:req.body.username, //Se va a mandar la informacion de username a validar 
            email:req.body.email, //Se va a mandar la informacion de email a validar 
            password:req.body.password, //Se va a mandar la informacion de password a validar 
        })

        //Si la informacion es valida entonces vamos a implementar la siguiente funcion que devuelve status de creado
        await newUser.save();
        res.status(200).send("User created.");
    }catch(err){
        next(err);
    }
    
};