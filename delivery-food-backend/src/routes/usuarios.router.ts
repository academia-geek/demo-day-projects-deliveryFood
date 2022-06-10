import { Router } from 'express';
const routerUsuario = Router();
import { createValidator } from 'express-joi-validation';
import { getUsers, createUser, updateUser, deleteUser, getUserById } from '../controllers/usuario.controllers'
import usuarioSchema from '../schemas/usuario.schema.joi';
import usuarioParamSchema from '../schemas/usuario_params.schema.joi';
const validator = createValidator();

routerUsuario.get('/', getUsers);
routerUsuario.post('/', validator.body(usuarioSchema), createUser);
routerUsuario.put('/:id', validator.params(usuarioParamSchema), validator.body(usuarioSchema), updateUser);
routerUsuario.delete('/:id', validator.params(usuarioParamSchema), deleteUser);
routerUsuario.get('/:id', validator.params(usuarioParamSchema), getUserById);

/**
 * @swagger
 * components:
 *   schemas:
 *      Usuarios:
 *        type: object
 *        properties:
 *          id_usuario:
 *            type: integer
 *            example: 1
 *          nombre:
 *            type: string
 *            description: Nombre del usuario
 *            example: "Juan"
 *          apellido:
 *            type: string
 *            description: "Apellido del usuario"
 *            example: "Perez"
 *          telefono:
 *            type: number
 *            description: "Telefono de contacto"
 *            example: "123456789"
 *          tipo:
 *            type: string
 *            enum:
 *              - "Administrador"
 *              - "Usuario"
 *              - "Repartidor"
 *              - "establecimiento"
 *            description: "Tipo de usuario"
 *            example: "cliente"
 *          email:
 *            type: string
 *            unique: true
 *            description: "Email del usuario"
 *            example: "email@example.com"
 *        required:
 *          - documento
 *          - nombre
 *          - apellido
 *          - telefono
 *          - tipo
 *          - email
 *        example:
 *          id_usuario: 1
 *          nombre: Juan
 *          apellido: Perez
 *          telefono: 123456789
 *          tipo: cliente
 *          email: mail@example.com
 * 
 * /api/usuarios:
 *   post:
 *     tags:
 *       - Usuarios
 *     summary: Crea un nuevo usuario
 *     description: Crea un nuevo usuario
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Datos del usuario
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/Usuarios'
 *     responses:
 *       '200':
 *         description: Usuario creado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Usuario registrado con éxito"
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
 *       - Usuarios
 *     summary: Obtiene todos los usuarios
 *     description: Obtiene todos los usuarios
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     responses:
 *       '200':
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuarios'
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
 * /api/usuarios/{documento}:
 *   get:
 *     tags:
 *       - Usuarios
 *     summary: Obtiene un usuario
 *     description: Obtiene un usuario
 *     parameters:
 *       - in: path
 *         name: documento
 *         schema:
 *           type: number
 *         required: true
 *         description: documento del usuario
 *     responses:
 *       '200':
 *         description: Usuario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuarios'
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
 *       - Usuarios
 *     summary: Actualiza un usuario
 *     description: Actualiza un usuario
 *     parameters:
 *       - in: path
 *         name: documento
 *         schema:
 *           type: number
 *         required: true
 *         description: documento del usuario
 *       - in: body
 *         name: body
 *         description: Datos del usuario
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/Usuarios'
 *     responses:
 *       '200':
 *         description: Usuario actualizado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Usuario actualizado con éxito"
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
 *       - Usuarios
 *     summary: Elimina un usuario
 *     description: Elimina un usuario
 *     parameters:
 *       - in: path
 *         name: documento
 *         schema:
 *           type: string
 *         required: true
 *         description: documento del usuario
 *     responses:
 *       '200':
 *         description: Usuario eliminado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Usuario eliminado con éxito"
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

export default routerUsuario;