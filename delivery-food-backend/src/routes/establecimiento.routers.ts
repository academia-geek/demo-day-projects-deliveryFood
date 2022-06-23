import { Router } from "express";
const routerEstablecimiento = Router();
import { decodeToken } from "../firebase/firebase.token";
import { createValidator } from "express-joi-validation";
import establecimientoSchema from "../schemas/establecimiento.schema.joi";
import establecimientoParamSchema from "../schemas/establecimiento_params.schema.joi";
const validator = createValidator();

import {
    getEstablecimiento,
    createEstablecimiento,
    updateEstablecimiento,
    deleteEstablecimiento,
    getEstablecimientoById,
} from "../controllers/postgres/establecimiento.controller";
routerEstablecimiento.get("/",decodeToken, getEstablecimiento);
routerEstablecimiento.post("/createEstablecimiento", validator.body(establecimientoSchema), decodeToken,createEstablecimiento);
routerEstablecimiento.put(
    "/:id",
    validator.params(establecimientoParamSchema),
    validator.body(establecimientoSchema),
    decodeToken,
    updateEstablecimiento,
);
routerEstablecimiento.delete("/:id", validator.params(establecimientoParamSchema), decodeToken,deleteEstablecimiento);
routerEstablecimiento.get("/:id", validator.params(establecimientoParamSchema),decodeToken, getEstablecimientoById);

export default routerEstablecimiento;
