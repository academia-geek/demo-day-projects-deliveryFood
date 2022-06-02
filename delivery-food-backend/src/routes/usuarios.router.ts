import {Router} from 'express';
const routerUsuario = Router();

import {getUsers,createUser,updateUser,deleteUser} from '../controllers/usuario.controllers'

routerUsuario.get('/',getUsers);
routerUsuario.post('/',createUser);
routerUsuario.post('/:id',updateUser);
routerUsuario.post('/:id',deleteUser);

export default routerUsuario;