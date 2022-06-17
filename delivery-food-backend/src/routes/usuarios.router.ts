import { Router } from "express";
const routerUsuario = Router();
import { createValidator } from "express-joi-validation";
import { getUsers, createUser, updateUser, deleteUser, getUserById } from "../controllers/postgres/usuario.controllers";
import usuarioSchema from "../schemas/usuario.schema.joi";
import usuarioParamSchema from "../schemas/usuario_params.schema.joi";
const validator = createValidator();
import { decodeToken } from "../firebase/firebase.token";

routerUsuario.get("/",decodeToken, getUsers);
routerUsuario.post("/", validator.body(usuarioSchema),decodeToken, createUser);
routerUsuario.put("/:id", validator.params(usuarioParamSchema), validator.body(usuarioSchema), decodeToken,updateUser);
routerUsuario.delete("/:id", validator.params(usuarioParamSchema), decodeToken, deleteUser);
routerUsuario.get("/:id", validator.params(usuarioParamSchema),decodeToken, getUserById);

export default routerUsuario;
