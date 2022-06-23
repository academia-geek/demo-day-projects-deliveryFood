import Joi from "joi";

const direccionParamSchema = Joi.object({
    id: Joi.number().required(),
})

export default direccionParamSchema;