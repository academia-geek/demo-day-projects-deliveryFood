import {Router} from 'express';
const routerPago = Router();
import { createValidator } from 'express-joi-validation';
import {getPago,createPago,updatePago,deletePago,getPagoById} from '../controllers/postgres/pago.controller'
import pagoSchema from '../schemas/pago.schema.joi';
import pagoParamSchema from '../schemas/pago_params.schema.joi';
import { decodeToken } from "../firebase/firebase.token";

const validator = createValidator();

routerPago.get('/',decodeToken,getPago);
routerPago.post('/',validator.body(pagoSchema),decodeToken,createPago);
routerPago.put('/:id',validator.params(pagoParamSchema),validator.body(pagoSchema),decodeToken,updatePago);
routerPago.delete('/:id',validator.params(pagoParamSchema),decodeToken,deletePago);
routerPago.get('/:id',validator.params(pagoParamSchema),decodeToken,getPagoById);

export default routerPago;