import express, { Request, Response } from "express";
import auth from '../firebase/firebase.auth';

export const authRouter = express.Router();

authRouter.use(express.json());

export const createUser = async (_req: Request, res: Response) => {
    try {
        const { email, password } = _req.body;
        const result = await auth.createUser(email, password);
        res.status(201).send(result)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export const logIn = async (_req: Request, res: Response) => {
    try {
        const { email, password } = _req.body;
        const result = await auth.logIn(email, password);
        res.status(201).send(result)
    } catch (error) {
        res.status(500).send(error.message)
    }
}