import Joi from "joi";
const itemsSchema = Joi.object().keys({
    id_plato: Joi.string(),
    nombre: Joi.string().min(1).max(50).required(),
    categoria: Joi.string().required(),
    descripcion: Joi.string().min(1).max(200).required(),
    foto: Joi.string(),
    valor: Joi.number().greater(0).required(),
    opcion: Joi.array().items({
        nombre: Joi.string().min(1).max(50).when("opcion", { is: Joi.exist(), then: Joi.required() }),
        tipo: Joi.string().min(1).max(50).when("opcion", { is: Joi.exist(), then: Joi.required() }),
        opcion: Joi.array().items(
            Joi.string().min(1).max(50).when("opcion", { is: Joi.exist(), then: Joi.required() }),
        ),
    }),
});

export default itemsSchema;

