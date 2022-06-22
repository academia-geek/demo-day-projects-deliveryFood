import { Request, Response, NextFunction } from "express";
import config from "../firebase/firebase.config";
import { QueryResult } from "pg";
import { pool } from "../db/db";

export const decodeToken = (operacion:string)=>{
    return async (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers.authorization?.split(" ")[1];
        try {
            if (token === undefined) {
                return res.status(401).json({ message: "Unauthorized Access" });
            } else {
                const decodeValue = await config.admin.auth().verifyIdToken(token!);
                if (decodeValue != null || decodeValue != undefined) {
                    authService(decodeValue.email,operacion);
                }
                return res.json({ message: "Unauthorized Access" });
            }
        }
        catch (error) {
            if (error.code === "auth/id-token-expired") {
                return res.status(412).json({ message: "Token expired" });
            } else if (error.code === "auth/argument-error") {
                return res.status(406).json({ message: "Invalid token" });
            } else if (error.code === "auth/email-already-exists") {
                return res.status(406).json({ message: "Email already exists" });
            } else if (error.code === "auth/user-not-found") {
                return res.status(406).json({ message: "User not found" });
            }

            else {
                return res.status(500).json({ message: "Internal Server Error" });
            }
        }
    }
}

export const authService = (email: string, operacion: string) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            /*Consultar el id a la tabla usuario y que me traiga el rol*/
            const response: QueryResult = await pool.query('SELECT tipo FROM usuario WHERE email= $1', [email]);
            const [role] = response.rows;
            const { tipo } = role;

            /*Consultar  el rol a la tabla roles y saber que permisos tiene*/
            const resRoles: QueryResult = await pool.query('SELECT permisos FROM roles WHERE rol= $1', [tipo]);
            const [rolesPermissions] = resRoles.rows;
            console.log(rolesPermissions);
            const { permisos } = rolesPermissions;
            let permisosArreglo = permisos.split(',');
            if (permisosArreglo.includes(operacion)) {
                return next();
            } else {
                return res.status(401).json('No tiene permisos');
            }

        } catch (e) {
            console.log(e)
        }
    }
}