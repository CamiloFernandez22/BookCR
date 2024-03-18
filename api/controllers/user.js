import User from "../models/User.js";
// se va a conectar con la BD para crear una coleccion de manera asincrona ya que no se hace inmediatamente. 

export const updateUser = async (req, res, next) =>{

    //Aqui vamos a manejar cualquier error al hacer la operacion de metodo update
    try{
        //Aqui estamos buscando al User por el numero de ID, para luego actualizarlo con el metodo de Mongo SET,
        // indicando que se va actualizar el body, tambien se le pasa el parametro de "new" para que no haga un query cada vez que se actualizan los datos.
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        res.status(200).json(updatedUser)
    }catch(err){
        next(err);
    }
}

export const deleteUser = async (req, res, next) =>{

   //Aqui vamos a manejar cualquier error al hacer la operacion de metodo update
   try{
    //Aqui estamos buscando al User por el numero de ID, para luego borrarlo.
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User deleted.")
    }catch(err){
    next(err);
    }
}

export const getUser = async (req, res, next) =>{

     //Aqui vamos a manejar cualquier error al hacer la operacion de metodo update
     try{
        //Aqui estamos buscando un User en especifico por el numero de ID.
    const user = await User.findById(req.params.id);
        res.status(200).json(user)
    }catch(err){
        next(err);
    }
 }

 export const getUsers = async (req, res, next) =>{

    //const failed = true;
    //if(failed) return next(err);

    //Aqui vamos a manejar cualquier error al hacer la operacion de metodo update
    try{
        //Aqui estamos buscando todos los Useres existentes.
    const users = await User.find();
        res.status(200).json(users);
    }catch(err){
        next(err);
    }
}
