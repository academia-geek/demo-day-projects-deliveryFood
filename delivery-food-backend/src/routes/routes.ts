import { Router } from "express";
const router = Router();
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

router.get("/getmenu/:id", getmenuID);
router.post("/createMenu",validator.body(menuSchema), postMenu);
router.post("/createItems/:id",validator.body(itemsSchema), postItems);
router.delete("/deletemenu/:id", deletemenuID);
router.patch("/editMenu/:id",validator.body(menuSchema), patchmenuID);
router.patch("/editItems/:id",validator.body(itemsSchema), editItemsMenuId);
router.delete("/deleteItems/:id", deleteItemsMenuId);

export default router;
