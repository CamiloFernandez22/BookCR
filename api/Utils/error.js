//Aqui se va a crear una funcion que permita crear un error con los detalles del mismo.
export const createError = (status, message)=>{
    const err = new Error(); 
    err.status = status;
    err.message = message;
    return err;
};