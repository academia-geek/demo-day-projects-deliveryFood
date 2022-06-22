import { Request, Response, NextFunction } from "express";
import config from "../firebase/firebase.config";

export const decodeToken = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];    
    try {
        if (token === undefined) {
            return res.status(401).json({ message: "Unauthorized Access" });
        } else {
            const decodeValue = await config.admin.auth().verifyIdToken(token!);            
            if (decodeValue != null || decodeValue != undefined) {
                return next();
            }
            return res.json({ message: "Unauthorized Access" });
        }}
        catch (error) {
            if (error.code === "auth/id-token-expired") {
                return res.status(412).json({ message: "Token expired" });
            } else if (error.code === "auth/argument-error") {
                return res.status(406).json({ message: "Invalid token" });
            } else if (error.code === "auth/email-already-exists"){
                return res.status(406).json({ message: "Email already exists" });
            } else if (error.code === "auth/user-not-found"){
                return res.status(406).json({ message: "User not found" });
            }
            
            else {
                return res.status(500).json({ message: "Internal Server Error" });
            }
        }
}
