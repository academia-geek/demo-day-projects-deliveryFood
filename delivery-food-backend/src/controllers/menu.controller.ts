import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service.mongo";

export const menuRouter = express.Router();
menuRouter.use(express.json());

menuRouter.get("/menu", async (req: Request, res: Response) => {
    try {
        const menu = await collections.DeliveryFood.find({}).toArray();
        res.status(200).send(menu);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

menuRouter.post("/addMenu", async (req: Request, res: Response) => {
    try {
        let data = req.body;
        const menu = await collections.DeliveryFood.insertOne(data);
        res.status(200).send(menu);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

menuRouter.get("/generarPedido", async (req: Request, res: Response) => {
    try {
        const menu = await collections.DeliveryFood.findOne(  
            { $and: [ { _id : new ObjectId('629bd27f5a869c709b43a514') },
                { items : { $elemMatch : { id_plato : new ObjectId('629bd92398e2857d04a05eac')}}}
              ] }
                        );
        console.log(menu)        
        res.status(200).send(menu);
    } catch (error) {
        res.status(500).send(error.message);
    }
});
