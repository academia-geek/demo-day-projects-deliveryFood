import { Router } from 'express';
const routerEstablecimiento = Router();

import { createValidator } from 'express-joi-validation';
import establecimientoSchema from '../schemas/establecimiento.schema.joi';
import establecimientoParamSchema from '../schemas/establecimiento_params.schema.joi';
const validator = createValidator();


import { getEstablecimiento, createEstablecimiento, updateEstablecimiento, deleteEstablecimiento, getEstablecimientoById } from '../controllers/establecimiento.controller';

routerEstablecimiento.get('/', getEstablecimiento);
routerEstablecimiento.post('/', validator.body(establecimientoSchema), createEstablecimiento);
routerEstablecimiento.put('/:id', validator.params(establecimientoParamSchema), validator.body(establecimientoSchema), updateEstablecimiento);
routerEstablecimiento.delete('/:id', validator.params(establecimientoParamSchema), deleteEstablecimiento);
routerEstablecimiento.get('/:id', validator.params(establecimientoParamSchema), getEstablecimientoById);

export default routerEstablecimiento;
/**
  * @swagger
 * components:
 *   schemas:
 *      establecimiento:
 *        type: object
 *        properties:
 *          id_establecimiento:
 *            type: integer
 *            example: 1
 *          estado:
 *            type: string
 *            enum:
 *              - ACTIVO
 *              - INACTIVO
 *            example: ACTIVO
 *          nombre:
 *            type: string
 *            example: "Establecimiento 1"
 *          operacional:
 *            type: string
 *            enum:
 *              - S
 *              - N
 *            example: S
 *          id_menu:
 *            type: string
 *            example: '1g24h234jk6h324j5k43h'
 *          foto_est:
 *            type: string
 *            example: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
 *        required:
 *          - estado
 *          - nombre
 *          - operacional
 *          - id_menu
 *          - foto_est
 *        example:
 *          id_establecimiento: 1 
 *          estado: ACTIVO
 *          nombre: "Establecimiento 1"
 *          operacional: S
 *          id_menu: '1g24h234jk6h324j5k43h'
 *          foto_est: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
 * tags:
 *   - name: Establecimientos
 *     description: "Operaciones sobre establecimientos"
 *   - name: Usuarios
 *     description: "Operaciones sobre usuarios"
 *   - name: Pedidos
 *     description: "Operaciones sobre pedidos"
 *   - name: Pagos
 *     description: "Operaciones sobre pagos"
 *   - name: Direcciones
 *     description: "Operaciones sobre direcciones"
 * /api/establecimientos:
 *   post:
 *     tags:
 *       - Establecimientos
 *     description: Crea un nuevo establecimiento
 *     summary: Crea un nuevo establecimiento
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Datos del establecimiento
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/establecimiento'
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Establecimiento creado"
 *       '500':
 *         description: Error interno
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal Server error"
 *   get:
 *     tags:
 *       - Establecimientos
 *     summary: Obtiene todos los establecimientos
 *     description: Obtiene todos los establecimientos
 *     responses:
 *       '200':
 *         description: Lista de establecimientos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/establecimiento'
 *       '500':
 *         description: Error interno
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal Server error"
 * 
 * /api/establecimientos/{id_establecimiento}:
 *   get:
 *     tags:
 *       - Establecimientos
 *     summary: Obtiene un establecimiento
 *     description: Obtiene un establecimiento
 *     parameters:
 *       - name: id_establecimiento
 *         in: path
 *         description: id del establecimiento
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Establecimiento encontrado"
 *       '500':
 *         description: Error interno
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
 *       - Establecimientos
 *     summary: Actualiza un establecimiento
 *     description: Actualiza un establecimiento
 *     parameters:
 *       - name: id_establecimiento
 *         in: path
 *         description: id del establecimiento
 *         required: true
 *         schema:
 *           type: string
 *       - in: body
 *         name: body
 *         description: Datos del establecimiento
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/establecimiento'
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Establecimiento actualizado"
 *       '500':
 *         description: Error interno
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
 *       - Establecimientos
 *     summary: Elimina un establecimiento
 *     description: Elimina un establecimiento
 *     parameters:
 *       - name: id_establecimiento
 *         in: path
 *         description: id del establecimiento
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Establecimiento eliminado"
 *       '500':
 *         description: Error interno
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal Server error"
*/
