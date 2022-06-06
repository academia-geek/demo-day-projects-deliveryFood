import {Router} from 'express';
const routerEstablecimiento = Router();

import {getEstablecimiento,createEstablecimiento,updateEstablecimiento,deleteEstablecimiento} from '../controllers/establecimiento.controller';
routerEstablecimiento.get('/',getEstablecimiento);
routerEstablecimiento.post('/',createEstablecimiento);
routerEstablecimiento.put('/:id',updateEstablecimiento);
routerEstablecimiento.delete('/:id',deleteEstablecimiento);
export default routerEstablecimiento;