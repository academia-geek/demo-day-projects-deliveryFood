import { Request, Response } from 'express';
import { pool } from '../db/db';
import { QueryResult } from 'pg';


export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await
            pool.query('SELECT * FROM usuario ORDER BY id ASC');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
};

export const createUser = async (req: Request, res: Response) => {
    const {email,infoPago,tipo,apellido,telefono,nombre} = req.body;
    try {
        const response: QueryResult = await pool.query('INSERT INTO users (email,infoPago,tipo,apellido,telefono,nombre) VALUES ($1, $2, $3, $4)', [email,infoPago,tipo,apellido,telefono,nombre]);
        return res.json(response.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
};

export const updateUser = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const {email,infoPago,tipo,apellido,telefono,nombre} = req.body;
        const response: QueryResult = await pool.query('UPDATE users SET  "email" = $1, "infoPago" = $2, "tipo" = $3, "apellido" = $4, "telefono" = $5, "nombre" = $6 WHERE id = $7', [email,infoPago,tipo,apellido,telefono,nombre,id])
        return res.json(response.rows);
    }catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const response: QueryResult = await pool.query('DELETE FROM users WHERE id = $1', [id]);
        return res.json(response.rows);
    }catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
};