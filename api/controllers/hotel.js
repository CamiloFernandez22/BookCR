import Hotel from "../models/Hotel.js";
// se va a conectar con la BD para crear una coleccion de manera asincrona ya que no se hace inmediatamente. 
export const createHotel = async (req, res, next) =>{

    //Aqui se obtiene la informacion del hotel del usuario.
    const newHotel = new Hotel(req.body) //request es lo que se obtiene del usario.
                                        //body es donde se va a almacenar la informacion del objeto. 

    //Aqui vamos a manejar cualquier error al hacer la operacion  metodo create
    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    }catch(err){
        next(err); // Aqui se va a pasar el error a express para ser procesado.
    }
}

export const updateHotel = async (req, res, next) =>{

    //Aqui vamos a manejar cualquier error al hacer la operacion de metodo update
    try{
        //Aqui estamos buscando al hotel por el numero de ID, para luego actualizarlo con el metodo de Mongo SET,
        // indicando que se va actualizar el body, tambien se le pasa el parametro de "new" para que no haga un query cada vez que se actualizan los datos.
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        res.status(200).json(updatedHotel)
    }catch(err){
        next(err);
    }
}

export const deleteHotel = async (req, res, next) =>{

   //Aqui vamos a manejar cualquier error al hacer la operacion de metodo update
   try{
    //Aqui estamos buscando al hotel por el numero de ID, para luego borrarlo.
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel deleted.")
    }catch(err){
    next(err);
    }
}

export const getHotel = async (req, res, next) =>{

     //Aqui vamos a manejar cualquier error al hacer la operacion de metodo update
     try{
        //Aqui estamos buscando un hotel en especifico por el numero de ID.
    const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel)
    }catch(err){
        next(err);
    }
 }

 export const getHotels = async (req, res, next) =>{

    //const failed = true;
    //if(failed) return next(err);

    //Aqui vamos a manejar cualquier error al hacer la operacion de metodo update
    try{
        //Aqui estamos buscando todos los hoteles existentes.
    const hotels = await Hotel.find();
        res.status(200).json(hotels);
    }catch(err){
        next(err);
    }
}
