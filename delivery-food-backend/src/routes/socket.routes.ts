import { Router } from "express";
const routerPosition = Router();

import {
   getPosition
    
} from "../controllers/socket";

routerPosition.get("/position",getPosition);

export default routerPosition;