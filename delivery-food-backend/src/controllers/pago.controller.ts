import { Request, Response } from 'express';
import { pool } from '../db/db';
import { QueryResult } from 'pg';

export const getPago = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await
            pool.query('SELECT * FROM pago ORDER BY id_pago ASC');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
};

export const createPago = async (req: Request, res: Response) => {
    try {
        const { id_usuario, id_pedido, id_establecimiento, metodoPago, fecha, cantidad } = req.body;
        const response: QueryResult = await pool.query('INSERT INTO pago (id_usuario,id_pedido,id_establecimiento,metodopago,fecha,cantidad) VALUES ($1, $2, $3, $4, $5, $6)', 
        [id_usuario, id_pedido, id_establecimiento, metodoPago, fecha, cantidad]);
        return res.status(200).json({
            message: "Pago registrado con éxito"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
};

export const updatePago = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const { id_usuario, id_pedido, id_establecimiento, metodoPago, fecha, cantidad } = req.body;
        const response: QueryResult = await pool.query('UPDATE pago SET  "id_usuario" = $1, "id_pedido" = $2, "id_establecimiento" = $3, "metodopago" = $4, "fecha" = $5, "cantidad" = $6  WHERE id_pago = $7', 
        [id_usuario, id_pedido, id_establecimiento, metodoPago, fecha, cantidad, id])
        return res.json({
            message: "Pago actualizado con éxito"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
};

//Delete
export const deletePago = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const response: QueryResult = await pool.query('DELETE FROM pago WHERE id_pago = $1', [id]);
        return res.json({
            message: "Pago eliminado con éxito"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
};

//Get for ID
export const getPagoById = async (req: Request, res: Response): Promise<Response> => {
    const id_pago = parseInt(req.params.id);
    try {
        const response: QueryResult = await pool.query('SELECT * FROM pago WHERE id_pago= $1', [id_pago]);
        return res.json(response.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
};