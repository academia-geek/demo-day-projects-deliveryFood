import express, { Request, Response} from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service.mongo";

export const menuRouter = express.Router();
menuRouter.use(express.json());

menuRouter.get("/menu",async (req: Request, res: Response) => {
    try {
      const menu = await collections.DeliveryFood.find({}).toArray();
      res.status(200).send(menu);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
