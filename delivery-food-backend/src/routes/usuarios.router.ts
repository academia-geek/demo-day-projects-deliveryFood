import {Router} from 'express';
const routerUsuario = Router();
import { createValidator } from 'express-joi-validation';
import {getUsers,createUser,updateUser,deleteUser} from '../controllers/usuario.controllers'
import usuarioSchema from '../schemas/usuario.schema.joi';
const validator = createValidator();

routerUsuario.get('/',getUsers);
routerUsuario.post('/',validator.body(usuarioSchema),createUser);
routerUsuario.put('/:id',updateUser);
routerUsuario.delete('/:id',deleteUser);

export default routerUsuario;