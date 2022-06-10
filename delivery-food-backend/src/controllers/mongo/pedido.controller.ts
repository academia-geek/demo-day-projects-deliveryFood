import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../../services/database.service.mongo";

// Crear Pedido
export const postPedido = async (req: Request, res: Response) => {
    try {
        let data = req.body;
        data.id_plato = new ObjectId(data.id_plato);
        let id = new ObjectId(req.params.id);
        await collections.Menu.updateOne({ _id: id }, { $push: { items: data } });
        res.status(200).send({message: "Items agregados"});
    } catch (error) {
        res.status(500).send(error.message);
    }
};