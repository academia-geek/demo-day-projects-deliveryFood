import { Router } from 'express';
const routerPedido = Router();
import { createValidator } from 'express-joi-validation';
import { createPedido, deletePedido, getPedido, getPedidoById, updatePedido } from '../controllers/pedido.controller'
import pedidoSchema from '../schemas/pedido.schema.joi';
import pedidoParamSchema from '../schemas/pedido_params.chema.joi';
const validator = createValidator();

routerPedido.get('/', getPedido);
routerPedido.post('/', validator.body(pedidoSchema), createPedido);
routerPedido.put('/:id', validator.params(pedidoParamSchema), validator.body(pedidoSchema), updatePedido);
routerPedido.delete('/:id', validator.params(pedidoParamSchema), deletePedido);
routerPedido.get('/:id', validator.params(pedidoParamSchema), getPedidoById);

export default routerPedido;

/**
 * @swagger
 * components:
 *   schemas:
 *     pedidos:
 *       type: object
 *       properties:
 *         codigoOrden:
 *           type: number
 *           example: 123
 *         id_usuario:
 *           type: integer
 *           example: 1
 *         id_itempedido:
 *           type: string
 *           example: "1"
 *         impuestos:
 *           type: number
 *           example: 2
 *         tipoEntrega:
 *           type: string
 *           enum:
 *             - "Domicilio"
 *             - "Retiro"
 *         valorDomicilio:
 *           type: number
 *           example: 2
 *         estadoDelPedido:
 *           type: string
 *           enum:
 *             - "Recibido"
 *             - "Preparando"
 *             - "En camino"
 *             - "Entregado"
 *         hora:
 *           type: string
 *           example: "12:00"
 *         fecha:
 *           type: string
 *           example: "2020-01-01"
 *         valorTotal:
 *           type: number
 *           example: 2
 *         descuento:
 *           type: number
 *           example: 0
 *       required:
 *         - codigoOrden
 *         - id_usuario
 *         - id_itempedido
 *         - impuestos
 *         - tipoEntrega
 *         - valorDomicilio
 *         - estadoDelPedido
 *         - hora
 *         - fecha
 *         - valorTotal
 *         - descuento
 *       example:
 *         codigoOrden: 123
 *         id_usuario: 1
 *         id_itempedido: "1"
 *         impuestos: 2
 *         tipoEntrega: "Domicilio"
 *         valorDomicilio: 2
 *         estadoDelPedido: "Recibido"
 *         hora: "12:00"
 *         fecha: "2020-01-01"
 *         valorTotal: 2
 *         descuento: 0
 * /api/pedidos:
 *   post:
 *     tags:
 *       - Pedidos
 *     summary: "Crear un pedido"
 *     description: "Crear un pedido"
 *     operationId: "createPedido"
 *     parameters:
 *       - name: body
 *         in: body
 *         description: "Pedido a crear"
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/pedidos'
 *     consumes:
 *       - "application/json"
 *     produces:
 *       - "application/json"
 *     responses:
 *       200:
 *         description: "Pedido creado con éxito"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                message:
 *                 type: string
 *                 example: "Pedido creado con éxito"
 *       500:
 *         description: Interal Server error
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
 *       - Pedidos
 *     summary: "Obtener todos los pedidos"
 *     description: "Obtener todos los pedidos"
 *     operationId: "getPedidos"
 *     produces:
 *       - "application/json"
 *     responses:
 *       200:
 *         description: "Pedidos obtenidos con éxito"
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/pedidos'
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
 * /api/pedidos/{codigoOrden}:
 *   get:
 *     tags:
 *       - Pedidos
 *     summary: "Obtener un pedido"
 *     description: "Obtener un pedido"
 *     operationId: "getPedido"
 *     produces:
 *       - "application/json"
 *     parameters:
 *       - name: codigoOrden
 *         in: path
 *         description: "Código del pedido"
 *         required: true
 *         schema:
 *           type: integer
 *           example: 123
 *     responses:
 *       200:
 *         description: "Pedido obtenido con éxito"
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/pedidos'
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
 *       - Pedidos
 *     summary: "Actualizar un pedido"
 *     description: "Actualizar un pedido"
 *     operationId: "updatePedido"
 *     parameters:
 *       - name: codigoOrden
 *         in: path
 *         description: "Código del pedido"
 *         required: true
 *         schema:
 *           type: integer
 *           example: 123
 *       - name: body
 *         in: body
 *         description: "Pedido a actualizar"
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/pedidos'
 *     consumes:
 *       - "application/json"
 *     produces:
 *       - "application/json"
 *     responses:
 *       200:
 *         description: "Pedido actualizado con éxito"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                  type: string
 *                  example: "Pedido actualizado con éxito"
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
 *       - Pedidos
 *     summary: "Eliminar un pedido"
 *     description: "Eliminar un pedido"
 *     operationId: "deletePedido"
 *     parameters:
 *       - name: codigoOrden
 *         in: path
 *         description: "Código del pedido"
 *         required: true
 *         schema:
 *           type: integer
 *           example: 123
 *     responses:
 *       200:
 *         description: "Pedido eliminado con éxito"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                message:
 *                  type: string
 *                  example: "Pedido eliminado con éxito"
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