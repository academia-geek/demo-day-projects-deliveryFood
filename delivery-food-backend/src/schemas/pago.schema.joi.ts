import Joi from "joi";

const pagoSchema = Joi.object({
    id_usuario:Joi.number().required(),
    id_pedido:Joi.number().required(),
    id_establecimiento:Joi.number().required(),
    metodoPago:Joi.string().valid('Deposito','Credito','Efectivo').required(),
    fecha:Joi.date().less('now').required(),
    cantidad:Joi.number().required(),
})

export default pagoSchema;