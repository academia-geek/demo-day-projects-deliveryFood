import { Router } from 'express';
const routerDireccion = Router();
import { createValidator } from 'express-joi-validation';
import direccionSchema from '../schemas/direccion.schema.joi';
import direccionParamSchema from '../schemas/direccion_params.schema.joi';
const validator = createValidator();

import { createDireccion, deleteDireccion, getDireccion, getDireccionById, updateDireccion } from '../controllers/direccion.controller';

routerDireccion.get('/', getDireccion);
routerDireccion.post('/', validator.body(direccionSchema), createDireccion);
routerDireccion.put('/:id', validator.body(direccionSchema), validator.params(direccionParamSchema), updateDireccion);
routerDireccion.delete('/:id', validator.params(direccionParamSchema), deleteDireccion);
routerDireccion.get('/:id', validator.params(direccionParamSchema), getDireccionById);

export default routerDireccion;

/**
 * @swagger
 * components:
 *   schemas:
 *     direccion:
 *       type: object
 *       properties:
 *         id_direccion:
 *           type: integer
 *           example: 1
 *         id_establecimiento:
 *           type: integer
 *           example: 1
 *         descripcion:
 *           type: string
 *           example: "Calle falsa 123 piso x"
 *         direccion:
 *           type: string
 *           example: "Calle falsa 123"
 *         nombreBarrio:
 *           type: string
 *           example: "Caballito"
 *         latitud:
 *           type: float
 *           example: "34.6037"
 *         longitud:
 *           type: float
 *           example: "58.3816"
 *         unidad:
 *           type: string
 *           example: "km"
 *         ciudad:
 *           type: string
 *           example: "Cordoba"
 *         id_usuario:
 *           type: integer
 *           example: 1
 *       required:
 *         - id_direccion
 *         - descripcion
 *         - direccion
 *         - latitud
 *         - longitud
 *         - ciudad
 *       example:
 *         id_direccion: 1
 *         id_establecimiento: 1
 *         descripcion: "Calle falsa 123 piso x"
 *         direccion: "Calle falsa 123"
 *         nombreBarrio: "Caballito"
 *         latitud: "34.6037"
 *         longitud: "58.3816"
 *         unidad: "km"
 *         ciudad: "Cordoba"
 *         id_usuario: 1
 * /api/direccion:
 *   post:
 *     tags:
 *       - Direcciones
 *     summary: "Crear una direccion"
 *     description: "Crear una direccion"
 *     operationId: "createDireccion"
 *     consumes:
 *       - "application/json"
 *     produces:
 *       - "application/json"
 *     parameters:
 *       - name: body
 *         in: body
 *         description: "Direccion a crear"
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/direccion'
 *     responses:
 *        200:
 *          description: "Direccio registrada con éxito"
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:    
 *                  message:
 *                   type: string
 *                   example: "Direccion registrada con éxito"
 *        500:
 *          description: Internal Server error
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: "Internal Server error"
 *   get:
 *     tags:
 *       - Direcciones
 *     summary: "Obtener todas las direcciones"
 *     description: "Obtener todas las direcciones"
 *     operationId: "getDirecciones"
 *     produces:
 *       - "application/json"
 *     responses:
 *       200:
 *         description: "Direcciones obtenidas con éxito"
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/direccion'
 *       500:
 *         description: Internal Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal Server error"
 * /api/direccion/{id_direccion}:
 *   get:
 *     tags:
 *       - Direcciones
 *     summary: "Obtener una direccion"
 *     description: "Obtener una direccion"
 *     operationId: "getDireccion"
 *     produces:
 *       - "application/json"
 *     parameters:
 *       - name: id_direccion
 *         in: path
 *         description: "Identificador de la direccion"
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *           example: 1
 *     responses:
 *       200:
 *         description: "Direccion obtenida con éxito"
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/direccion'
 *       500:
 *         description: Internal Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal Server error"
 *   put:
 *     tags:
 *       - Direcciones
 *     summary: "Actualizar una direccion"
 *     description: "Actualizar una direccion"
 *     operationId: "updateDireccion"
 *     consumes:
 *       - "application/json"
 *     produces:
 *       - "application/json"
 *     parameters:
 *       - name: id_direccion
 *         in: path
 *         description: "Identificador de la direccion"
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *           example: 1
 *       - name: body
 *         in: body
 *         description: "Datos de la direccion a actualizar"
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/direccion'
 *     responses:
 *       200:
 *         description: "Direccion actualizada con éxito"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Direcccion actualizada con éxito"
 *       500:
 *         description: Internal Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal Server error"
 *   delete:
 *     tags:
 *       - Direcciones
 *     summary: "Eliminar una direccion"
 *     description: "Eliminar una direccion"
 *     operationId: "deleteDireccion"
 *     produces:
 *       - "application/json"
 *     parameters:
 *       - name: id_direccion
 *         in: path
 *         description: "Identificador de la direccion"
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *           example: 1
 *     responses:
 *       200:
 *         description: "Direccion eliminada con éxito"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Direcccion eliminada con éxito"
 *       500:
 *         description: Internal Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal Server error"
 */