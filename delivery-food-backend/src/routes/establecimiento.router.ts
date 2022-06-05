import {Router} from 'express';
const router = Router();

import {getEstablecimiento,createEstablecimiento} from '../controllers/establecimiento.controller';

router.get('/',getEstablecimiento);
router.post('/',createEstablecimiento)

/**
 * @swagger
 * components:
 *   schemas:
 *     establecimiento:
 *       type: object
 *       properties:
 *         estado:
 *           type: string
 *           enum:
 *             - ACTIVO
 *             - INACTIVO
 *           example: ACTIVO
 *         nombre:
 *           type: string
 *           example: "Establecimiento 1"
 *         operacional:
 *           type: string
 *           enum:
 *             - SI
 *             - NO
 *           example: SI
 *         id_menu:
 *           type: string
 *           example: '1g24h234jk6h324j5k43h'
 *       required:
 *         - estado
 *         - nombre
 *         - operacional
 *         - id_menu
 *       example:
 *         estado: ACTIVO
 *         nombre: "Establecimiento 1"
 *         operacional: SI 
 *         id_menu: '1g24h234jk6h324j5k43h'
 */

/**
 * @swagger
 * /api/establecimientos:
 *   post:
 *     tags:
 *       - Establecimientos
 *     description: Crea un nuevo establecimiento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/establecimiento'
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: "Establecimiento creado"
 *       '500':
 *         description: Error interno
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: "Internal Server error"
 *   get:
 *     tags:
 *       - Establecimientos
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
 *                 mensaje:
 *                   type: string
 *                   example: "Internal Server error"
 * 
 * /api/establecimientos/{id_establecimiento}:
 *   get:
 *     tags:
 *       - Establecimientos
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
 *                 mensaje:
 *                   type: string
 *                   example: "Establecimiento encontrado"
 *       '500':
 *         description: Error interno
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: "Internal Server error"
 *   put:
 *     tags:
 *       - Establecimientos
 *     description: Actualiza un establecimiento
 *     parameters:
 *       - name: id_establecimiento
 *         in: path
 *         description: id del establecimiento
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/establecimiento'
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: "Establecimiento actualizado"
 *       '500':
 *         description: Error interno
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: "Internal Server error"
 *   delete:
 *     tags:
 *       - Establecimientos
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
 *                 mensaje:
 *                   type: string
 *                   example: "Establecimiento eliminado"
 *       '500':
 *         description: Error interno
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: "Internal Server error"
 */

export default router;