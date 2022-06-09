import { Request, Response } from 'express';
import { pool } from '../db/db';
import { QueryResult } from 'pg';

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await
            pool.query('SELECT * FROM usuario ORDER BY id_usuario ASC');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
};

export const createUser = async (req: Request, res: Response) => {
    try {
        const { nombre, apellido, telefono, tipo, email } = req.body;
        const response: QueryResult = await pool.query('INSERT INTO usuario (nombre,apellido,telefono,tipo,email) VALUES ($1, $2, $3, $4,$5)', [nombre, apellido, telefono, tipo, email]);
        return res.status(200).json({
            message: "Usuario registrado con éxito"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const { nombre, apellido, telefono, tipo, email } = req.body;
        const response: QueryResult = await pool.query('UPDATE usuario SET  "nombre" = $1, "apellido" = $2, "telefono" = $3, "tipo" = $4, "email" = $5  WHERE id_usuario = $6', [nombre, apellido, telefono, tipo, email, id])
        return res.json({
            message: "Usuario actualizado con éxito"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
};

//Delete
export const deleteUser = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const response: QueryResult = await pool.query('DELETE FROM usuario WHERE id_usuario = $1', [id]);
        return res.json({
            message: "Usuario eliminado con éxito"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
};

//Get for ID
export const getUserById = async (req: Request, res: Response): Promise<Response> => {
    const id_usuario = parseInt(req.params.id);
    try {
        const response: QueryResult = await pool.query('SELECT * FROM usuario WHERE id_usuario= $1', [id_usuario]);
        return res.json(response.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
};