import { time } from "console";
import Joi from "joi";

const pedidoSchema = Joi.object({
    id_usuario:Joi.number().required(),
    id_establecimiento:Joi.number().required(),
    id_menu:Joi.string().required(),
    id_itempedido:Joi.array().items(Joi.string()).required(),
    id_repartidor:Joi.number(),
    cantidad:Joi.array().items(Joi.number()).required(),
    impuestos:Joi.number().required(),
    tipoEntrega:Joi.string().valid('Domicilio','Retiro').required(),
    valorDomicilio:Joi.number().required(),
    estadoDelPedido: Joi.string().valid('En revisión','Aceptado','Preparando','En camino','Entregado').required(),
    hora:Joi.string().regex(/^([0-9]{2})\:([0-9]{2})\:([0-9]{2})$/).required(),
    fecha:Joi.date().less('now').required(), 
    descuento:Joi.number().required(),
    calificacion:Joi.number(),
})

export default pedidoSchema;