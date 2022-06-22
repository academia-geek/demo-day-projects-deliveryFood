import { Router } from "express";
const routerPedido = Router();
import { createValidator } from "express-joi-validation";
import {
    createPedido,
    deletePedido,
    getPedido,
    getPedidoById,
    updatePedido,
    ACTstatusPedidoId
} from "../controllers/postgres/pedido.controller";
import pedidoSchema from "../schemas/pedido.schema.joi";
import pedidoParamSchema from "../schemas/pedido_params.chema.joi";
const validator = createValidator();
import { decodeToken } from "../firebase/firebase.token";


routerPedido.get("/",decodeToken, getPedido);
routerPedido.post("/",validator.body(pedidoSchema),createPedido);
routerPedido.put("/:id", validator.params(pedidoParamSchema), validator.body(pedidoSchema), decodeToken, updatePedido);
routerPedido.delete("/:id", validator.params(pedidoParamSchema),decodeToken, deletePedido);
routerPedido.get("/:id", validator.params(pedidoParamSchema),decodeToken, getPedidoById);
routerPedido.patch("/:id", validator.params(pedidoParamSchema), ACTstatusPedidoId);

export default routerPedido;
