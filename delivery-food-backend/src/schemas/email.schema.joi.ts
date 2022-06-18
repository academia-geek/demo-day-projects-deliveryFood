import Joi from "joi"

const mailSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required()
})

export default mailSchema