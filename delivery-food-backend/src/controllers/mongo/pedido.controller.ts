import { Request, Response } from "express";
import { collections } from "../../services/database.service.mongo";

// Crear Pedido
export const postPedido = async (req: Request, res: Response) => {
    try {
        let data = req.body;                
        await collections.Pedido.updateOne({ _id: new Object(data.id_menu) }, { $push: { items: data } });
        res.status(200).send({message: "Items agregados"});
    } catch (error) {
        res.status(500).send(error.message);
    }
};

