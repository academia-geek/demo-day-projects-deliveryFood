import Joi from "joi";

const usuarioSchema = Joi.object({
    nombre: Joi.string().max(100).required(),
    apellido: Joi.string().max(100).required(),
    telefono: Joi.number().required(),
    tipo: Joi.string().valid('Administrador','Usuario','Repartidor','Establecimiento').required(),
    email: Joi.string().email({minDomainSegments: 2}).required(),
})

export default usuarioSchema;