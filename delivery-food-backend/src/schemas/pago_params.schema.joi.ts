import Joi from "joi";

const pagoParamSchema = Joi.object({
    id: Joi.number().required(),
})

export default pagoParamSchema;