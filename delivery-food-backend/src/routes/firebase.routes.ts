import express from "express";
import { createUser, logIn} from '../controllers/firebase.controller';
//import { decodeJWT } from "../controllers/firebaserol.controller";
import { createValidator } from 'express-joi-validation';
// Importando la validación del token
import { decodeToken } from '../firebase/firebase.token';

const validator = createValidator();

export const authRouter = express.Router();

authRouter.use(express.json());

authRouter.post('/logIn', logIn )
authRouter.post('/createUser', createUser)
//authRouter.post('/decodeJWT', decodeJWT)