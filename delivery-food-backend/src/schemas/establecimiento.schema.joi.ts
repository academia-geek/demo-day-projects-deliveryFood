import Joi from "joi";

const establecimientoSchema = Joi.object({
    estado: Joi.string().valid('ACTIVO','INACTIVO').required(),
    operacional: Joi.string().valid('S','N').required(),
    nombre: Joi.string().max(255).required(),
    id_menu: Joi.string().required(),
})

export default establecimientoSchema;