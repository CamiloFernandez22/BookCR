import mongoose from "mongoose";


const RoomSchema = new mongoose.Schema({
    //Aqui se van a crear los atributos de Room Schema
    title:{
        type: String, //Este atributo sera de tipo string
        required: true, //Este atributo sera requerido para crear la instancia 
    },
    price:{
        type: Number, //Este atributo sera de tipo string
        required: true, //Este atributo sera requerido para crear la instancia
    },
    maxPeople:{
        type: Number, //Este atributo sera de tipo string
        required: true, //Este atributo sera requerido para crear la instancia
    },
    desc:{
        type: String, //Este atributo sera de tipo string
        required: true, //Este atributo sera requerido para crear la instancia 
    },
    roomNumbers: [{number:Number, unavailableDates: {type: [Date]}}], //Se incluye dentro del arreglo el numero de habitacion y las fechas no disponibles 
    },                                                                //esto para que el user no pueda seleccionar estas fechas.
                                                                      //Cada item del arreglo de fechas no disponibles seran de tipo date.
                                                                      

{timestamps:true} //Nos va a permitir tener un log
);



//Aqui vamos a crear el modelo 
export default mongoose.model("Room", RoomSchema);