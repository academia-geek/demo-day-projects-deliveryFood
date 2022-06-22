import Joi from "joi";

const direccionSchema = Joi.object({
    id_establecimiento: Joi.number(),
    descripcion: Joi.string().max(50).required(),
    direccion: Joi.string().max(100).required(),
    nombreBarrio: Joi.string().max(255),
    latitud: Joi.number().precision(7).required(),
    longitud: Joi.number().precision(7).required(),
    unidad: Joi.string().max(100),
    ciudad: Joi.string().max(100).required(),
    id_usuario: Joi.number(),
})

export default direccionSchema;