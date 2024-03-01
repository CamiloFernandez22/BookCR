//https://mongoosejs.com/docs/guide.html
import mongoose from "mongoose";


const HotelSchema = new mongoose.Schema({
    //Aqui se van a crear los atributos de hotel Schema
    name:{
        type: String, //Este atributo sera de tipo string
        required: true, //Este atributo sera requerido para crear la instancia 
    },
    type:{
        type: String, //Este atributo sera de tipo string
        required: true, //Este atributo sera requerido para crear la instancia 
    },
    city:{
        type: String, //Este atributo sera de tipo string
        required: true, //Este atributo sera requerido para crear la instancia 
    },
    address:{
        type: String, //Este atributo sera de tipo string
        required: true, //Este atributo sera requerido para crear la instancia
    },
    distance:{
        type: String, //Este atributo sera de tipo string
        required: true, //Este atributo sera requerido para crear la instancia
    },
    images:{
        type: [String],
    },
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String, //Este atributo sera de tipo string
        required: true, //Este atributo sera requerido para crear la instancia
    },
    rating:{
        type: Number, //Este atributo sera de tipo string
        min:0,
        max:5,
    },
    rooms:{
        type: [String], //Este atributo sera de tipo string
    },
    cheapestPrice:{
        type: Number, //Este atributo sera de tipo string
        required: true, //Este atributo sera requerido para crear la instancia
    },
    featured:{
        type: Boolean, //Este atributo sera de tipo bool
        default: false, //Este atributo sera requerido para crear la instancia
    },
});

//Aqui vamos a crear el modelo 
export default mongoose.model("Hotel", HotelSchema)