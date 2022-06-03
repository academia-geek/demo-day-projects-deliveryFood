import Joi from "joi";

const usuarioSchema = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    telefono: Joi.string().required(),
    tipo: Joi.string().valid('Administrador','Usuario').required(),
    email:Joi.string().email().required(),
    infoPago: Joi.string().required(),
})

export default usuarioSchema;