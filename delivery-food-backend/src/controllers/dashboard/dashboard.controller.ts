import { Request, Response } from "express";
import { pool } from "../../db/db";
import { QueryResult } from "pg";


export const totalComercios = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query("SELECT COUNT (id_establecimiento) FROM establecimiento");
        return res.status(200).json(response.rows[0].count);
    } catch (e) {
        console.log(e);
        return res.status(500).json("Internal Server error");
    }
};

export const totalPedidosProceso = async (req: Request, res: Response): Promise<Response> => {
    try {
        let hoy = new Date();        
        const response: QueryResult = await pool.query("SELECT COUNT (codigoorden) FROM pedido WHERE fecha = $1 AND estadodelpedido != $2" , [(hoy.toISOString()).split("T")[0], "Entregado"]);
        return res.status(200).json(response.rows[0].count);
    } catch (e) {
        console.log(e);
        return res.status(500).json("Internal Server error");
    }
};

export const totalPedidosEntregados = async (req: Request, res: Response): Promise<Response> => {
    try {
        let hoy = new Date();        
        const response: QueryResult = await pool.query("SELECT COUNT (codigoorden) FROM pedido WHERE fecha = $1 AND estadodelpedido = $2" , [(hoy.toISOString()).split("T")[0], "Entregado"]);
        return res.status(200).json(response.rows[0].count);
    } catch (e) {
        console.log(e);
        return res.status(500).json("Internal Server error");
    }
};

export const totalDomiciliariosActivos = async (req: Request, res: Response): Promise<Response> => {
    try {
        let hoy = new Date();        
        const response: QueryResult = await pool.query("SELECT COUNT (codigoorden) FROM pedido WHERE fecha = $1 AND estadodelpedido = $2" , [(hoy.toISOString()).split("T")[0], "Entregado"]);
        return res.status(200).json(response.rows[0].count);
    } catch (e) {
        console.log(e);
        return res.status(500).json("Internal Server error");
    }
};