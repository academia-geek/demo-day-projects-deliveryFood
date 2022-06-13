import { time } from "console";
import Joi from "joi";

const pedidoSchema = Joi.object({
    id_usuario:Joi.number().required(),
    id_itempedido:Joi.string().max(50).required(),
    impuestos:Joi.number().required(),
    tipoEntrega:Joi.string().valid('Domicilio','Retiro').required(),
    valorDomicilio:Joi.number().required(),
    estadoDelPedido: Joi.string().valid('Recibido','Preparando','En camino','Entregado').required(),
    hora:Joi.any().required(),
    fecha:Joi.date().less('now').required(),
    valorTotal:Joi.number().required(),
    descuento:Joi.number().required(),
})

export default pedidoSchema;