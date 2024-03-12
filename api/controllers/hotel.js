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