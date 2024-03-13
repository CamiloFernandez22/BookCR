import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    //Aqui se van a crear los atributos de User Schema
    username:{
        type: String, //Este atributo sera de tipo string
        required: true, //Este atributo sera requerido para crear la instancia
        unique: true, 
    },
    email:{
        type: String, //Este atributo sera de tipo string
        required: true, //Este atributo sera requerido para crear la instancia
        unique: true, 
    },
    password:{
        type: String, //Este atributo sera de tipo string
        required: true, //Este atributo sera requerido para crear la instancia 
    },
    isAdmin:{
        type: Boolean, //Este atributo sera de tipo bool
        default: false, //Este atributo sera requerido para crear la instancia
    },
},
{timestamps:true} //Nos va a permitir tener un log
);

//Aqui vamos a crear el modelo 
export default mongoose.model("User", UserSchema);