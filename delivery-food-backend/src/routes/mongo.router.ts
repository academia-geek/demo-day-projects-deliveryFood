import { Router } from "express";
const router = Router();
import { createValidator } from "express-joi-validation";
import menuSchema from "../schemas/menu.schema";
import itemsSchema from "../schemas/items.schema";

const validator = createValidator();
import {
    getmenuID,
    postItems,
    deletemenuID,
    patchmenuID,
    editItemsMenuId,
    deleteItemsMenuId,
} from "../controllers/mongo/menu.controller";


router.get("/getMenu/:id", getmenuID);
router.post("/createItems/:id", validator.body(itemsSchema), postItems);
router.delete("/deleteMenu/:id", deletemenuID);
router.patch("/editMenu/:id", validator.body(menuSchema), patchmenuID);
router.patch("/editItems/:id", validator.body(itemsSchema), editItemsMenuId);
router.delete("/deleteItems/:id", deleteItemsMenuId);

export default router;

/**
 * @swagger
 * components:
 *     schemas:
 *         opcion:
 *             type: object
 *             properties:
 *                 nombre:
 *                     type: string
 *                     example: "extras"
 *                 tipo:
 *                     type: string
 *                     example: "Ingrediente"
 *                 opciones:
 *                     type: array
 *                     example:
 *                         - "Pollo"
 *                         - "Peperoni"
 *                         - "Jamon"
 *             required:
 *                 - nombre
 *                 - tipo
 *             example:
 *                 nombre: "extras"
 *                 tipo: "Ingrediente"
 *                 opciones:
 *                     - "Pollo"
 *                     - "Peperoni"
 *                     - "Jamon"
 *         items:
 *             type: object
 *             properties:
 *                 nombre:
 *                     type: string
 *                     example: "Pizza"
 *                 descripcion:
 *                     type: string
 *                     example: "Pizza de queso"
 *                 categoria:
 *                     type: string
 *                     example: "Pizzas"
 *                 foto:
 *                     type: string
 *                     example: "https://www.google.com/img/logo_home_jumbo.png"
 *                 valor:
 *                     type: number
 *                     example: 2
 *                 opcion:
 *                     type: array
 *                     opcion:
 *                         $ref: "#/components/schemas/opcion"
 *                 id_plato:
 *                     type: string
 *                     example: 1
 *             required:
 *                 - nombre
 *                 - descripcion
 *                 - categoria
 *                 - foto
 *                 - valor
 *                 - opcion
 *                 - adicionales
 *             example:
 *                 nombre: "Pizza"
 *                 descripcion: "Pizza de queso"
 *                 categoria: "Pizzas"
 *                 foto: "https://www.google.com/img/logo_home_jumbo.png"
 *                 valor: 2
 *                 opcion:
 *                     - nombre: "extras"
 *                       tipo: "Ingrediente"
 *                       opciones:
 *                           - "Pollo"
 *                           - "Peperoni"
 *                           - "Jamon"
 *                 id_plato: 1
 * 
 *         Menu:
 *             type: object
 *             properties:
 *                 tipo_menu:
 *                     type: string
 *                     enum:
 *                         - "T??pico"
 *                         - "Especial"
 *                         - "vegetariano"
 *                         - "saludable"
 *                         - "Postres"
 *                         - "Panader??a"
 *                         - "Parrilla"
 *                         - "Pollo"
 *                         - "Desayunos"
 *                         - "Comida R??pida"
 *                     example: "T??pico"
 *                 items:
 *                     type: array
 *                     items:
 *                         $ref: "#/components/schemas/items"
 *                 id:
 *                     type: string
 *                     example: 1
 *             required:
 *                 - tipo_menu
 *                 - items
 *                 - nombre
 *                 - descripcion
 *                 - categoria
 *                 - foto
 *                 - valor
 *                 - opcion
 *                 - adicionales
 *             example:
 *                 tipo_menu: "Plato"
 *                 items:
 *                     - nombre: "Pizza"
 *                       descripcion: "Pizza de queso"
 *                       categoria: "Pizzas"
 *                       foto: "https://www.google.com/img/logo_home_jumbo.png"
 *                       valor: 2
 *                       opcion:
 *                           - nombre: "extras"
 *                             tipo: "Ingrediente"
 *                             opciones:
 *                                 - "Pollo"
 *                                 - "Peperoni"
 *                                 - "Jamon"
 *                       id_plato: 1
 *                 id: 1
 * 
 * /api/mongo/deleteMenu/{id}:
 *     delete:
 *         tags:
 *             - Mongo
 *         summary: "Eliminar un menu"
 *         description: "Eliminar un menu"
 *         operationId: "deleteMenu"
 *         parameters:
 *             - name: path
 *               in: path
 *               description: "Id del menu"
 *               required: true
 *               schema:
 *                   type: string
 *                   example: 1
 *         produces:
 *             - application/json
 *         responses:
 *             200:
 *                 description: "Menu eliminado"
 *                 content:
 *                     application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                                 message:
 *                                     type: string
 *                                     example: "Menu eliminado correctamente"
 *             500:
 *                 description: Internal Server error
 *                 content:
 *                     application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                                 message:
 *                                     type: string
 *                                     example: "Internal Server error"
 * /api/mongo/editMenu/{id}:
 *     patch:
 *         tags:
 *             - Mongo
 *         summary: "Editar un tipo de menu"
 *         description: "Editar un tipo de menu"
 *         operationId: "editMenutype"
 *         parameters:
 *             - name: path
 *               in: path
 *               description: "Id del tipo menu"
 *               required: true
 *               schema:
 *                   type: ObjectId
 *                   example: 1
 *             - name: body
 *               in: body
 *               description: "tipo de Menu a editar"
 *               required: true
 *               schema:
 *                   type: object
 *                   properties:
 *                       tipo_menu:
 *                           type: string
 *                           example: "Plato"
 *         consumes:
 *             - application/json
 *         produces:
 *             - application/json
 *         responses:
 *             200:
 *                 description: "Menu editado"
 *                 content:
 *                     application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                                 message:
 *                                     type: string
 *                                     example: "Tipo de men?? actualizado"
 *             500:
 *                 description: Internal Server error
 *                 content:
 *                     application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                                 message:
 *                                     type: string
 *                                     example: "Internal Server error"
 * /api/mongo/editItems/{id}:
 *     patch:
 *         tags:
 *             - Mongo
 *         summary: "Editar un item"
 *         description: "Editar un item"
 *         operationId: "editItems"
 *         parameters:
 *             - name: path
 *               in: path
 *               description: "Id del item"
 *               required: true
 *               schema:
 *                   type: ObjectId
 *                   example: 1
 *             - name: body
 *               in: body
 *               description: "Item a editar"
 *               required: true
 *               schema:
 *                   $ref: "#/components/schemas/items"
 *         consumes:
 *             - application/json
 *         produces:
 *             - application/json
 *         responses:
 *             200:
 *                 description: "Item editado"
 *                 content:
 *                     application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                                 message:
 *                                     type: string
 *                                     example: "Items editados"
 *             500:
 *                 description: Internal Server error
 *                 content:
 *                     application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                                 message:
 *                                     type: string
 *                                     example: "Internal Server error"
 * /api/mongo/deleteItems/{id}:
 *     delete:
 *         tags:
 *             - Mongo
 *         summary: "Eliminar un item"
 *         description: "Eliminar un item"
 *         operationId: "deleteItems"
 *         parameters:
 *             - name: path
 *               in: path
 *               description: "Id del item"
 *               required: true
 *               schema:
 *                   type: ObjectId
 *                   example: 1
 *         produces:
 *             - application/json
 *         responses:
 *             200:
 *                 description: "Item eliminado"
 *                 content:
 *                     application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                                 message:
 *                                     type: string
 *                                     example: "Item eliminado"
 *             500:
 *                 description: Internal Server error
 *                 content:
 *                     application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                                 message:
 *                                     type: string
 *                                     example: "Internal Server error"
 * 
 */