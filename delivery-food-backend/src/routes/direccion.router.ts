import { Router } from "express";
const routerDireccion = Router();
import { createValidator } from "express-joi-validation";
import direccionSchema from "../schemas/direccion.schema.joi";
import direccionParamSchema from "../schemas/direccion_params.schema.joi";
import { decodeToken } from "../firebase/firebase.token";

const validator = createValidator();

import {
    createDireccion,
    deleteDireccion,
    getDireccion,
    getDireccionById,
    updateDireccion,
} from "../controllers/postgres/direccion.controller";
routerDireccion.get("/",decodeToken, getDireccion);
routerDireccion.post("/", validator.body(direccionSchema), createDireccion);
routerDireccion.put("/:id", validator.body(direccionSchema), validator.params(direccionParamSchema), decodeToken, updateDireccion);
routerDireccion.delete("/:id", validator.params(direccionParamSchema), decodeToken, deleteDireccion);
routerDireccion.get("/:id", validator.params(direccionParamSchema), decodeToken, getDireccionById);
export default routerDireccion;
