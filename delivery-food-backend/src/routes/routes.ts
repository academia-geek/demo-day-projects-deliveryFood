import { Router } from "express";
const router = Router();
import { createValidator } from "express-joi-validation";
import menuSchema from "../schemas/menu.schema";
const validator = createValidator();


import {
    menuRouter
  } from "../controllers/menu.controller";

router.get("/menu",validator.body(menuSchema) ,menuRouter);

export default router;