import { Router } from 'express';
const routerPago = Router();
import { createValidator } from 'express-joi-validation';
import { getPago, createPago, updatePago, deletePago, getPagoById } from '../controllers/pago.controller'
import pagoSchema from '../schemas/pago.schema.joi';
import pagoParamSchema from '../schemas/pago_params.schema.joi';
const validator = createValidator();

routerPago.get('/', getPago);
routerPago.post('/', validator.body(pagoSchema), createPago);
routerPago.put('/:id', validator.params(pagoParamSchema), validator.body(pagoSchema), updatePago);
routerPago.delete('/:id', validator.params(pagoParamSchema), deletePago);
routerPago.get('/:id', validator.params(pagoParamSchema), getPagoById);

export default routerPago;

/**
 * @swagger
 * components:
 *   schemas:
 *     pagos:
 *       type: object
 *       properties:
 *         id_pago:
 *           type: integer
 *           example: 1
 *         id_usuario:
 *           type: integer
 *           example: 1
 *         id_establecimiento:
 *           type: integer
 *           example: 1
 *         id_pedido:
 *           type: integer
 *           example: 1
 *         metodoPago:
 *           type: string
 *           enum:
 *             - Deposito
 *             - Credito
 *             - Efectivo
 *           example: Efectivo
 *         fecha:
 *           type: string
 *           example: "2020-01-01"
 *         cantidad:
 *           type: number
 *           example: 100
 *       required:
 *         - id_usuario
 *         - id_establecimiento
 *         - id_pedido
 *         - metodoPago
 *         - fecha
 *         - cantidad
 *       example:
 *         id_pago: 1
 *         id_usuario: 1
 *         id_establecimiento: 1
 *         id_pedido: 1
 *         metodoPago: Efectivo
 *         fecha: "2020-01-01"
 *         cantidad: 100
 * /api/pagos:
 *   post:
 *     tags:
 *       - Pagos
 *     description: Crea un nuevo pago
 *     summary: Crea un nuevo pago
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Datos del pago
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/pagos'
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
 *                   example: "Pago registrado con éxito"
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
 *       - Pagos
 *     description: Obtiene todos los pagos
 *     summary: Obtiene todos los pagos
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/pagos'
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
 * /api/pagos/{id_pago}:
 *   get:
 *     tags:
 *       - Pagos
 *     description: Obtiene un pago
 *     summary: Obtiene un pago
 *     parameters:
 *       - in: path
 *         name: id_pago
 *         description: ID del pago
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/pagos'
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
 *       - Pagos
 *     description: Actualiza un pago
 *     summary: Actualiza un pago
 *     parameters:
 *       - in: path
 *         name: id_pago
 *         schema:
 *           type: integer
 *         required: true
 *         description: id del pago
 *       - in: body
 *         name: body
 *         description: Datos del pago
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/pagos'
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
 *                   example: "Pago actualizado con éxito"
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
 *       - Pagos
 *     description: Elimina un pago
 *     summary: Elimina un pago
 *     parameters:
 *       - in: path
 *         name: id_pago
 *         schema:
 *           type: integer
 *         required: true
 *         description: id del pago
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
 *                   example: "Pago eliminado con éxito"
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