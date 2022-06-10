import { Router } from "express";
const routerUsuario = Router();
import { createValidator } from "express-joi-validation";
import { getUsers, createUser, updateUser, deleteUser, getUserById } from "../controllers/postgres/usuario.controllers";
import usuarioSchema from "../schemas/usuario.schema.joi";
import usuarioParamSchema from "../schemas/usuario_params.schema.joi";
const validator = createValidator();

routerUsuario.get("/", getUsers);
routerUsuario.post("/", validator.body(usuarioSchema), createUser);
routerUsuario.put("/:id", validator.params(usuarioParamSchema), validator.body(usuarioSchema), updateUser);
routerUsuario.delete("/:id", validator.params(usuarioParamSchema), deleteUser);
routerUsuario.get("/:id", validator.params(usuarioParamSchema), getUserById);

export default routerUsuario;
