import { Router } from "express";
const routerMenu = Router();
import { createValidator } from "express-joi-validation";
import menuSchema from "../schemas/menu.schema";
import itemsSchema from "../schemas/items.schema";
import { decodeToken } from "../firebase/firebase.token";

const validator = createValidator();
import {
    getmenuID,
    postItems,
    deletemenuID,
    patchmenuID,
    editItemsMenuId,
    deleteItemsMenuId,
} from "../controllers/mongo/menu.controller";

routerMenu.get("/getmenu/:id",decodeToken,getmenuID);
routerMenu.post("/createItems/:id",validator.body(itemsSchema),decodeToken, postItems);
routerMenu.delete("/deletemenu/:id", decodeToken,deletemenuID);
routerMenu.patch("/editMenu/:id",validator.body(menuSchema), decodeToken,patchmenuID);
routerMenu.patch("/editItems/:id",validator.body(itemsSchema),decodeToken,editItemsMenuId);
routerMenu.delete("/deleteItems/:id", decodeToken,deleteItemsMenuId);

export default routerMenu;