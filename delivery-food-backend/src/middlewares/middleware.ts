import { Request, Response,NextFunction} from "express";
export const authService = () => {
    return (req:Request, res:Response, next:NextFunction) => {
        const {id} = req.body;
        /*Consultar el id a la tabla usuario y que me traiga el rol*/
        /*Consultar  el rol a la coleccion roles y saber que permisos tiene*/

        
        /*
        if(permission.includes(userRole)) {
            next();
        }else{
            return res.status(401).json('No tiene permisos');
        }
        */
    }
}