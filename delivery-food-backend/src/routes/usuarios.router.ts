import { Router } from "express";
const routerUsuario = Router();
import { createValidator } from "express-joi-validation";
import { getUsers, createUser, updateUser, deleteUser, getUserById, updateStatus } from "../controllers/postgres/usuario.controllers";
import usuarioSchema from "../schemas/usuario.schema.joi";
import usuarioParamSchema from "../schemas/usuario_params.schema.joi";
const validator = createValidator();
import { decodeToken } from "../firebase/firebase.token";

routerUsuario.get("/",decodeToken, getUsers);
routerUsuario.post("/", decodeToken, validator.body(usuarioSchema), createUser);
routerUsuario.put("/:id", decodeToken,  validator.params(usuarioParamSchema), validator.body(usuarioSchema), updateUser);
routerUsuario.delete("/:id", decodeToken ,validator.params(usuarioParamSchema), deleteUser);
routerUsuario.get("/:id", decodeToken ,validator.params(usuarioParamSchema), getUserById);
routerUsuario.patch("updateStatus/:id", decodeToken ,validator.params(usuarioParamSchema), updateStatus);

export default routerUsuario;
