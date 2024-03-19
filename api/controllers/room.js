import Room from "../models/Room.js";
//Se agrega el modelo de hotel ya que cuando se va a crear un input de habitacion el id se va a pasar al parametro de rooms en hotel. 
import Hotel from "../models/Hotel.js";
import {createError} from "../utils/error.js";

//Se va a crear una funcion asincrona para crear habitacion, esta funcion es distinta al resto de funciones CRUD de los controllers
export const createRoom = async (req,res,next) =>{

    //Vamos a pedir el id del hotel por medio de la sigueinte objeto req.params.
    const hotelId = req.params.hotelid;

    //Aqui vamos a crear una nueva instancia de habitacion donde tengamos el body con la informacion del room.
    const newRoom = new Room(req.body)

    try{
        //En primera instancia se va a salvar la habitacion por medio de la sigueinte funcion
        const savedRoom = await newRoom.save()

        //Se va a realizar otro try/catch ya que se va a actualizar el hotel 
        try{
            await Hotel.findByIdAndUpdate(hotelId,{
                $push: { rooms: savedRoom._id}, //Aqui se usa el metodo push de MongoDB para agregar el nuevo item de savedRoom en el array de la coleccion.
            });
        }catch(err){
            next(err)
        }
        res.status(200).json(savedRoom); //Aqui mandamos el status de OK y salvamos la habitacion de manera exitosa.
    }catch(err){
        next(err)
    }
};

//A partir de estas funciones CRUD todas son iguales al de los otros controllers, se reutiliza codigo. 

export const updateRoom = async (req, res, next) =>{

    //Aqui vamos a manejar cualquier error al hacer la operacion de metodo update
    try{
        //Aqui estamos buscando la habitacion por el numero de ID, para luego actualizarlo con el metodo de Mongo SET,
        // indicando que se va actualizar el body, tambien se le pasa el parametro de "new" para que no haga un query cada vez que se actualizan los datos.
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        res.status(200).json(updatedRoom);
    }catch(err){
        next(err);
    }
}   

export const deleteRoom = async (req, res, next) =>{
    const hotelId = req.params.hotelid;
   //Aqui vamos a manejar cualquier error al hacer la operacion de metodo update
   try{
    //Aqui estamos buscando la habitacion por el numero de ID, para luego borrarla.
    await Room.findByIdAndDelete(req.params.id);
    try{
        await Hotel.findByIdAndUpdate(hotelId,{
            $pull: { rooms: req.params.id}, //Aqui se usa el metodo push de MongoDB para agregar el nuevo item de savedRoom en el array de la coleccion.
        });
    }catch(err){
        next(err)
    }
    res.status(200).json("Room deleted.")
    }catch(err){
    next(err);
    }
}

export const getRoom = async (req, res, next) =>{

     //Aqui vamos a manejar cualquier error al hacer la operacion de metodo update
     try{
        //Aqui estamos buscando una habitacion en especifico por el numero de ID.
    const room = await Room.findById(req.params.id);
        res.status(200).json(room)
    }catch(err){
        next(err);
    }
 }

 export const getRooms= async (req, res, next) =>{

    //Aqui vamos a manejar cualquier error al hacer la operacion de metodo update
    try{
        //Aqui estamos buscando todos los hoteles existentes.
    const rooms = await Room.find();
        res.status(200).json(rooms);
    }catch(err){
        next(err);
    }
}
