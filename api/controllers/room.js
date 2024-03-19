import Room from "../models/Room.js";
//Se agrega el modelo de hotel ya que cuando se va a crear un input de habitacion el id se va a pasar al parametro de rooms en hotel. 
import Hotel from "../models/Hotel.js";
import {createError} from "../utils/error.js";

//Se va a crear una funcion asincrona para crear habitacion 
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
    }catch(err){
        next(err)
    }
}