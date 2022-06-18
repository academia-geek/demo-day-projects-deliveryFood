import { Router } from "express";
const routerMail = Router();
import { createValidator } from "express-joi-validation";
import direccionSchema from "../schemas/direccion.schema.joi";
import emailScheme from "../schemas/email.schema.joi";
import { decodeToken } from "../firebase/firebase.token";


const validator = createValidator();

import {
    mailConfig
} from "../controllers/emails/confpedido.controller";
routerMail.post("/:id",mailConfig);
export default routerMail;
