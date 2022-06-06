import {Router} from 'express';
const routerPago = Router();
import { createValidator } from 'express-joi-validation';
import {getPago,createPago,updatePago,deletePago,getPagoById} from '../controllers/pago.controller'
import pagoSchema from '../schemas/pago.schema.joi';
import pagoParamSchema from '../schemas/pago_params.schema.joi';
const validator = createValidator();

routerPago.get('/',getPago);
routerPago.post('/',validator.body(pagoSchema),createPago);
routerPago.put('/:id',validator.params(pagoParamSchema),validator.body(pagoSchema),updatePago);
routerPago.delete('/:id',validator.params(pagoParamSchema),deletePago);
routerPago.get('/:id',validator.params(pagoParamSchema),getPagoById);

export default routerPago;