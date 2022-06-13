import { Request, Response } from 'express';
import { pool } from '../db/db';
import { QueryResult } from 'pg';

export const getDireccion = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await
            pool.query('SELECT * FROM direccion ORDER BY id_direccion ASC');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
};

export const createDireccion = async (req: Request, res: Response) => {
    try {
        const { id_establecimiento, descripcion, direccion, nombreBarrio, latitud, longitud, unidad, ciudad, id_usuario } = req.body;
        const response: QueryResult = await pool.query('INSERT INTO direccion (id_establecimiento,descripcion,direccion,nombreBarrio,latitud,longitud,unidad,ciudad,id_usuario) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)', [id_establecimiento, descripcion, direccion, nombreBarrio, latitud, longitud, unidad, ciudad, id_usuario]);
        return res.status(200).json({
            message: "Dirección registrada con éxito"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
};

export const updateDireccion = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const { id_establecimiento, descripcion, direccion, nombreBarrio, latitud, longitud, unidad, ciudad, id_usuario } = req.body;
        const response: QueryResult = await pool.query('UPDATE direccion SET  "id_establecimiento" = $1, "descripcion" = $2, "direccion" = $3, "nombrebarrio" = $4, "latitud" = $5, "longitud" = $6, "unidad" = $7, "ciudad" = $8, "id_usuario" = $9 WHERE id_direccion = $10', [id_establecimiento, descripcion, direccion, nombreBarrio, latitud, longitud, unidad, ciudad, id_usuario, id])
        return res.json({
            message: "Dirección actualizada con éxito"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
};

//Delete
export const deleteDireccion = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const response: QueryResult = await pool.query('DELETE FROM direccion WHERE id_direccion = $1', [id]);
        return res.json({
            message: "Dirección eliminada con éxito"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
};

//Get for ID
export const getDireccionById = async (req: Request, res: Response): Promise<Response> => {
    const id_usuario = parseInt(req.params.id);
    try {
        const response: QueryResult = await pool.query('SELECT * FROM direccion WHERE id_direccion= $1', [id_usuario]);
        return res.json(response.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
};