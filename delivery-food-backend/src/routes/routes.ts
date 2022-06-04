import { Router } from "express";
const router = Router();

import {
    menuRouter
  } from "../controllers/menu.controller";

  router.get("/menu", menuRouter);

export default router;