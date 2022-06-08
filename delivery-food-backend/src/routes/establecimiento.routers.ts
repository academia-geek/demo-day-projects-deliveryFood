import {Router} from 'express';
const routerEstablecimiento = Router();

import { createValidator } from 'express-joi-validation';
import establecimientoSchema from '../schemas/establecimiento.schema.joi';
import establecimientoParamSchema from '../schemas/establecimiento_params.schema.joi';
const validator = createValidator();


import {getEstablecimiento,createEstablecimiento,updateEstablecimiento,deleteEstablecimiento, getEstablecimientoById} from '../controllers/establecimiento.controller';
routerEstablecimiento.get('/',getEstablecimiento);
routerEstablecimiento.post('/',validator.body(establecimientoSchema),createEstablecimiento);
routerEstablecimiento.put('/:id',validator.params(establecimientoParamSchema),validator.body(establecimientoSchema),updateEstablecimiento);
routerEstablecimiento.delete('/:id',validator.params(establecimientoParamSchema),deleteEstablecimiento);
routerEstablecimiento.get('/:id',validator.params(establecimientoParamSchema),getEstablecimientoById);
export default routerEstablecimiento;