import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../../services/database.service.mongo";

// export const postCalificacion = async (req: Request, res: Response) => { 
//     try {
//         const calificacion = await collections.Calificacion.updateOne( { calificacion: req.body.calificacion }); 
//                                                     );
//         res.status(200).send(menu);
//     } catch (error) {
//         console.error(error.code);
//         res.status(500).send(error.message);
//     }
// };