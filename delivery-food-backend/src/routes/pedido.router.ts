import {Router} from 'express';
const routerPedido = Router();
import { createValidator } from 'express-joi-validation';
import {createPedido, deletePedido, getPedido, getPedidoById, updatePedido} from '../controllers/pedido.controller'
import pedidoSchema from '../schemas/pedido.schema.joi';
import pedidoParamSchema from '../schemas/pedido_params.chema.joi';
const validator = createValidator();

routerPedido.get('/',getPedido);
routerPedido.post('/',validator.body(pedidoSchema),createPedido);
routerPedido.put('/:id',validator.params(pedidoParamSchema),validator.body(pedidoSchema),updatePedido);
routerPedido.delete('/:id',validator.params(pedidoParamSchema),deletePedido);
routerPedido.get('/:id',validator.params(pedidoParamSchema),getPedidoById);

export default routerPedido;