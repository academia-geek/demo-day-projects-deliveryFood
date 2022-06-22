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

router.post("/createMenu", validator.body(menuSchema), postMenu);
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
 *                         - "Típico"
 *                         - "Especial"
 *                         - "vegetariano"
 *                         - "saludable"
 *                         - "Postres"
 *                         - "Panadería"
 *                         - "Parrilla"
 *                         - "Pollo"
 *                         - "Desayunos"
 *                         - "Comida Rápida"
 *                     example: "Típico"
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
 * /api/mongo/createMenu:
 *     post:
 *         tags:
 *             - Mongo
 *         summary: "Crear un nuevo menu"
 *         description: "Crear un nuevo menu"
 *         operationId: "createMenu"
 *         parameters:
 *             - name: body
 *               in: body
 *               description: "Menu a crear"
 *               required: true
 *               schema:
 *                   $ref: "#/components/schemas/Menu"
 *         consumes:
 *             - application/json
 *         produces:
 *             - application/json
 *         responses:
 *             200:
 *                 description: "Menu creado"
 *                 content:
 *                     application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                                 message:
 *                                     type: string
 *                                     example: "Menu creado correctamente"
 *                                 id: 
 *                                    type: string
 *                                    example: 1
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
 * /api/mongo/getMenu/{id}:
 *     get:
 *         tags:
 *             - Mongo
 *         summary: "Obtener un menu"
 *         description: "Obtener un menu"
 *         operationId: "getMenuId"
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
 *         200:
 *             description: "Menu obtenido"
 *             content:
 *                 application/json:
 *                     schema:
 *                         type: object
 *                         properties:
 *                             $ref: "#/components/schemas/Menu"
 *         500:
 *             description: Internal Server error
 *             content:
 *                 application/json:
 *                     schema:
 *                         type: object
 *                         properties:
 *                             message:
 *                                 type: string
 *                                 example: "Internal Server error"
 * /api/mongo/createItems/{id}:
 *     post:
 *         tags:
 *             - Mongo
 *         summary: "Crear un nuevo item"
 *         description: "Crear un nuevo item"
 *         operationId: "createItems"
 *         parameters:
 *             - name: path
 *               in: path
 *               description: "Id del menu"
 *               required: true
 *               schema:
 *                   type: string
 *                   example: 1
 *             - name: body
 *               in: body
 *               description: "Item a crear"
 *               required: true
 *               schema:
 *                   $ref: "#/components/schemas/items"
 *         consumes:
 *             - application/json
 *         produces:
 *             - application/json
 *         responses:
 *             200:
 *                 description: "Item creado"
 *                 content:
 *                     application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                                 message:
 *                                     type: string
 *                                     example: "Items agregados"
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
 *                                     example: "Tipo de menú actualizado"
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