import { Request, Response, NextFunction } from "express";
import { TokenMessage } from "firebase-admin/lib/messaging/messaging-api";
import jwt_decode, { JwtPayload }  from "jwt-decode";


export const decodeJWT = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    try {
        let decodeToken = jwt_decode(token);    
        let email = (Object.values(decodeToken))[7];
        console.log(email);
        res.send(email)
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
};