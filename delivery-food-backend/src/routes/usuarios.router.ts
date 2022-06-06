import { Router } from 'express';
const routerUsuario = Router();
import { createValidator } from 'express-joi-validation';
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/usuario.controllers'
import usuarioSchema from '../schemas/usuario.schema.joi';
const validator = createValidator();

routerUsuario.post('/', validator.body(usuarioSchema), createUser);
routerUsuario.get('/', getUsers);
routerUsuario.put('/:id', updateUser);
routerUsuario.delete('/:id', deleteUser);

/**
 *  @swagger
 *  components:
 *   schemas:
 *     Usuarios:
 *       type: object
 *       properties:
 *         documento:
 *           type: number
 *           example: 123456789
 *         nombre:
 *           type: string
 *           description: Nombre del usuario
 *           example: "Juan"
 *         apellido:
 *           type: string
 *           description: "Apellido del usuario"
 *           example: "Perez"
 *         telefono:
 *           type: string
 *           description: "Telefono de contacto"
 *           example: "123456789"
 *         tipo:
 *           type: string
 *           enum:
 *             - "cliente"
 *             - "empleado"
 *             - "admin"
 *           description: "Tipo de usuario"
 *           example: "cliente"
 *         email:
 *           type: string
 *           description: "Email del usuario"
 *           example: "email@example.com"
 *       required:
 *         - documento
 *         - nombre
 *         - apellido
 *         - telefono
 *         - tipo
 *         - email
 *       example:
 *         documento: 123456789
 *         nombre: Juan
 *         apellido: Perez
 *         telefono: 123456789
 *         tipo: cliente
 *         email: mail@example.com
 */

/**
 * @swagger
 * /api/usuarios:
 *   post:
 *     tags:
 *       - Usuarios
 *     description: Crea un nuevo usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuarios'
 *     responses:
 *       '200':
 *         description: Usuario creado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *             properties:
 *             message:
 *               type: string
 *             example: "usuario creado"
 *       '500':
 *         description: Error interno
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *             properties:
 *             message:
 *               type: string
 *             example: "Internal Server error"
 *   get:
 *     tags:
 *       - Usuarios
 *     description: Obtiene todos los usuarios
 *     responses:
 *       '200':
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                $ref: '#/components/schemas/Usuarios'
 *       '500':
 *         description: Error interno
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *             properties:
 *             message:
 *               type: string
 *             example: "Internal Server error"
 */

/**
 * @swagger
 *   /api/usuarios/{documento}:
 *   get:
 *     tags:
 *       - Usuarios
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
 *       '404':
 *         description: Usuario no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *             properties:
 *             message:
 *               type: string
 *             example: "Usuario no encontrado"
 *       '500':
 *         description: Error interno
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *             properties:
 *             message:
 *               type: string
 *             example: "Internal Server error"
 *   put:
 *     tags:
 *       - Usuarios
 *     description: Actualiza un usuario
 *     parameters:
 *       - in: path
 *         name: documento
 *         schema:
 *           type: number
 *         required: true
 *         description: documento del usuario
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuarios'
 *     responses:
 *       '200':
 *         description: Usuario actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuarios'
 *       '404':
 *         description: Usuario no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *             properties:
 *             message:
 *               type: string
 *             example: "Usuario no encontrado"
 *       '500':
 *         description: Error interno
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *             properties:
 *             message:
 *               type: string
 *             example: "Internal Server error"
 *   delete:
 *     tags:
 *       - Usuarios
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
 *             properties:
 *             message:
 *               type: string
 *             example: "Usuario eliminado"
 *       '500':
 *         description: Error interno
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *             properties:
 *             message:
 *               type: string
 *             example: "Internal Server error"
 */

export default routerUsuario;
module.exports = routerUsuario;