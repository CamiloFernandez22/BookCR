import Room from "../models/Room.js";
//Se agrega el modelo de hotel ya que cuando se va a crear un input de habitacion el id se va a pasar al parametro de rooms en hotel. 
import Hotel from "../models/Hotel.js";
import {createError} from "../utils/error.js";

//Se va a crear una funcion asincrona para crear habitacion 
export const createRoom = async (req,res,next) =>{

    //Vamos a pedir el id del hotel por medio de la sigueinte funcion
    const hotelId = req.params.hotelid;

    //Aqui vamos a crear una nueva instancia de habitacion donde tengamos el body del modelo y el id del hotel.
    const newRoom = new Room(req.body)

    try{

    }catch(err){
        next(err)
    }
}