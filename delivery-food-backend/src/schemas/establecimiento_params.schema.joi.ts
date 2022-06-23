import Joi from "joi";

const establecimientoParamSchema = Joi.object({
    id: Joi.number().required(),
})

export default establecimientoParamSchema;