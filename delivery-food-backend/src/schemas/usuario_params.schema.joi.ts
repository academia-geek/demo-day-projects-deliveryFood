import Joi from "joi";

const usuarioParamSchema = Joi.object({
    id: Joi.number().required(),
})

export default usuarioParamSchema;