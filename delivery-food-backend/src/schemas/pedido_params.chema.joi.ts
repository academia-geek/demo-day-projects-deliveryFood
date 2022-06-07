import Joi from "joi";

const pedidoParamSchema = Joi.object({
    id: Joi.number().required(),
})

export default pedidoParamSchema;