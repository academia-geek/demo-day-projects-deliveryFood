import { Request, Response } from 'express';
import { pool } from '../db/db';
import { QueryResult } from 'pg';

//Get
export const getPedido = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query('SELECT * FROM pedido ORDER BY codigoOrden ASC');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal server error');
    }
};

//POST
export const createPedido = async (req: Request, res: Response): Promise<Response> => {
    /*TODO:Servicio de crear menu de mongo */
    const { id_usuario, id_itempedido, impuestos, tipoEntrega, valorDomicilio, estadoDelPedido, hora, fecha, valorTotal, descuento,id_establecimiento, id_repartidor, id_calificacion } = req.body;
    try {
        const response: QueryResult = await pool.query('INSERT INTO pedido (id_usuario,id_itempedido,impuestos,tipoentrega,valordomicilio,estadodelpedido,hora,fecha,valortotal,descuento) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)',
            [id_usuario, id_itempedido, impuestos, tipoEntrega, valorDomicilio, estadoDelPedido, hora, fecha, valorTotal, descuento,id_establecimiento, id_repartidor, id_calificacion]);
        return res.status(200).json({
            message: "Pedido creado con éxito"
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal server error');
    }
}


export const updatePedido = async (req: Request, res: Response) => {
    const id_pedido = parseInt(req.params.id);
    /*TODO:Servicio de actualizar menu de mongo */
    try {
        const { id_usuario, id_itempedido, impuestos, tipoEntrega, valorDomicilio, estadoDelPedido, hora, fecha, valorTotal, descuento, id_establecimiento , id_repartidor, id_calificacion } = req.body;
        const response: QueryResult = await pool.query('UPDATE pedido SET  "id_usuario" = $1, "id_itempedido" = $2, "impuestos" = $3, "tipoEntrega" = $4, "valorDomicilio" = $5 , "estadoDelPedido" = $6, "hora" = $7, "fecha" = $8, "valorTotal" = $9, "descuento" = $10, "id_establecimiento" = $11, "id_repartidor" = $12, "id_calificacion" = $13 WHERE codigoOrden = $14',
            [id_usuario, id_itempedido, impuestos, tipoEntrega, valorDomicilio, estadoDelPedido, hora, fecha, valorTotal, descuento, id_pedido, id_establecimiento , id_repartidor, id_calificacion])
        return res.json({
            message: "Pedido actualizado con éxito"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
};

export const deletePedido = async (req: Request, res: Response) => {
    const id_pedido = parseInt(req.params.id);
    /*TODO:Servicio de eliminar menu de mongo */
    try {
        const response: QueryResult = await pool.query('DELETE FROM pedido WHERE codigoOrden = $1', [id_pedido]);
        return res.json({
            message: "Pedido eliminado con éxito"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
};


//Get for ID
export const getPedidoById = async (req: Request, res: Response): Promise<Response> => {
    const id_pedido = parseInt(req.params.id);
    try {
        const response: QueryResult = await pool.query('SELECT * FROM pedido WHERE codigoOrden = $1', [id_pedido]);
        return res.json(response.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
};