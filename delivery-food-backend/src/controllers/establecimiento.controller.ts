import { Request, Response } from 'express';
import { pool } from '../db/db';
import { QueryResult } from 'pg';

//Get
export const getEstablecimiento = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query('SELECT * FROM establecimiento ORDER BY id_establecimiento ASC');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal server error');
    }
};

//POST
export const createEstablecimiento = async (req: Request, res: Response): Promise<Response> => {
    /*TODO:Servicio de crear menu de mongo */
    const { estado, operacional, nombre, id_menu,foto_est } = req.body;
    try {
        const response: QueryResult = await pool.query('INSERT INTO establecimiento (estado,operacional,nombre,id_menu, foto_est) VALUES ($1,$2,$3,$4, $5)', [estado, operacional, nombre, id_menu, foto_est]);
        return res.status(200).json({
            message: "Establecimiento creado con éxito"
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal server error');
    }
}


export const updateEstablecimiento = async (req: Request, res: Response) => {
    const id_establecimiento = parseInt(req.params.id);
    /*TODO:Servicio de actualizar menu de mongo */
    try {
        const { estado, operacional, nombre, id_menu, foto_est } = req.body;
        const response: QueryResult = await pool.query('UPDATE establecimiento SET  "estado" = $1, "operacional" = $2, "nombre" = $3, "id_menu" = $4, "foto_est" = $5 WHERE id_establecimiento = $6', [estado, operacional, nombre, id_menu,foto_est, id_establecimiento])
        return res.json({
            message: "Establecimiento actualizado con éxito"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
};

export const deleteEstablecimiento = async (req: Request, res: Response) => {
    const id_establecimiento = parseInt(req.params.id);
    /*TODO:Servicio de eliminar menu de mongo */
    try {
        const response: QueryResult = await pool.query('DELETE FROM establecimiento WHERE id_establecimiento = $1', [id_establecimiento]);
        return res.json({
            message: "Establecimiento eliminado con éxito"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
};

//Get for ID
export const getEstablecimientoById = async (req: Request, res: Response): Promise<Response> => {
    const id_usuario = parseInt(req.params.id);
    try {
        const response: QueryResult = await pool.query('SELECT * FROM establecimiento WHERE id_establecimiento = $1', [id_usuario]);
        return res.json(response.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
};