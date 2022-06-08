import {Router} from 'express';
const routerDireccion = Router();
import { createValidator } from 'express-joi-validation';
import direccionSchema from '../schemas/direccion.schema.joi';
import direccionParamSchema from '../schemas/direccion_params.schema.joi';
const validator = createValidator();

import { createDireccion, deleteDireccion, getDireccion, getDireccionById, updateDireccion } from '../controllers/direccion.controller';
routerDireccion.get('/',getDireccion);
routerDireccion.post('/',validator.body(direccionSchema),createDireccion);
routerDireccion.put('/:id',validator.body(direccionSchema),validator.params(direccionParamSchema),updateDireccion);
routerDireccion.delete('/:id',validator.params(direccionParamSchema),deleteDireccion);
routerDireccion.get('/:id',validator.params(direccionParamSchema),getDireccionById);
export default routerDireccion;