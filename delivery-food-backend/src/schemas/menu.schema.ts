import Joi from 'joi'

const menuSchema = Joi.object({   
    tipo_menu: Joi.string().valid('Tipico', 'Especial', 'Vegetariano','Saludable','Postres','Panaderia','Parrilla','Pollo','Desayunos','Comida Rápida').required(),
    categorias: Joi.object({
        nombre: Joi.string().min(1).max(50).required(),
        items: Joi.object({
            nombre: Joi.string().min(1).max(50).required(),            
            descripcion: Joi.string().min(1).max(200).required(),
            foto: Joi.string(),
            valor: Joi.number().greater(0).required(),    
            opcion: Joi.object({
                nombre: Joi.string().min(1).max(50).required(),
                tipo: Joi.string().min(1).max(50).required(),
                opciones: Joi.array().items(Joi.string().min(1).max(50).required())}),
            adicionales: Joi.object({
                nombre: Joi.string().min(1).max(50).required(),
                cantidad: Joi.number().min(0).required,
                valor: Joi.number().min(0).required}),          
            comentarios: Joi.string().min(1).max(200).required(),     
})
})
})

export default menuSchema;