import { Router } from "express";
const routerMenu = Router();
import { createValidator } from "express-joi-validation";
import menuSchema from "../schemas/menu.schema";
import itemsSchema from "../schemas/items.schema";

const validator = createValidator();
import {
    getmenuID,
    postMenu,
    postItems,
    deletemenuID,
    patchmenuID,
    editItemsMenuId,
    deleteItemsMenuId,
} from "../controllers/mongo/menu.controller";

routerMenu.get("/getmenu/:id", getmenuID);
routerMenu.post("/createMenu",validator.body(menuSchema), postMenu);
routerMenu.post("/createItems/:id",validator.body(itemsSchema), postItems);
routerMenu.delete("/deletemenu/:id", deletemenuID);
routerMenu.patch("/editMenu/:id",validator.body(menuSchema), patchmenuID);
routerMenu.patch("/editItems/:id",validator.body(itemsSchema), editItemsMenuId);
routerMenu.delete("/deleteItems/:id", deleteItemsMenuId);

export default routerMenu;
