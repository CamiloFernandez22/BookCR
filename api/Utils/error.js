//Aqui se va a crear una funcion que permita desplegar los detalles de un error
export const creatError = (status, message)=>{
    const err = new Error(); 
    err.status = status;
    err.message = message;
    return err;
};