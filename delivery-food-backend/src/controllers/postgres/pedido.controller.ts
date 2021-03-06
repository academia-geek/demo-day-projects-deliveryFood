import { Request, Response } from "express";
import { pool } from "../../db/db";
import { QueryResult } from "pg";
import { collections } from "../../services/database.service.mongo";
import { ObjectId } from "mongodb";
import { app } from "firebase-admin";
import {sendEmail} from "../../utilities/sendgrid";
import templateIds from "../../services/templateid.const";

//Get
export const getPedido = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query("SELECT * FROM pedido ORDER BY codigoOrden ASC");
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json("Internal server error");
    }
};

//POST
export const createPedido = async (req: Request, res: Response): Promise<Response> => {
    try {
        let data = req.body;
        let menu = await collections.Menu.findOne(
            { _id: new ObjectId(data.id_menu) },
            { projection: { _id: 0, tipo_menu: 1, items: 1 } },
        );
        let items = menu.items;
        let pedido = [];
        let subtotal = 0;
        for (let i = 0; i < data.id_platos.length; i++) {
            let item = items.find((item) => item.id_plato == data.id_platos[i]);
            pedido.push({
                nombre_producto: item.nombre,
                descripcion: item.descripcion,
                valor: item.valor,
                foto: item.foto,
                cantidad: data.cantidad[i],
            });
            subtotal = subtotal + item.valor * data.cantidad[i];
        }
        let calificacion = 0;
        let result = await collections.Pedido.insertOne({ items: pedido });
        let insertedId = result.insertedId.toHexString().replace(/['"]+/g, "");
        console.log(insertedId);
        const response: QueryResult = await pool.query(
            "INSERT INTO pedido (id_usuario,id_itempedido,impuestos,tipoentrega,valordomicilio,estadodelpedido,hora,fecha,valortotal,descuento,id_establecimiento,calificacion,id_repartidor) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)",
            [
                data.id_usuario,
                insertedId,
                data.impuestos,
                data.tipoEntrega,
                data.valorDomicilio,
                data.estadoDelPedido,
                data.hora,
                data.fecha,
                subtotal,
                data.descuento,
                data.id_establecimiento,
                calificacion,
                data.id_repartidor,
            ],
        );
        return res.status(200).json({
            message: "Pedido creado con ??xito",
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json("Internal server error");
    }
};

export const updatePedido = async (req: Request, res: Response) => {
    const id_pedido = parseInt(req.params.id);
    try {
        const {
            id_usuario,
            id_itempedido,
            impuestos,
            tipoEntrega,
            valorDomicilio,
            estadoDelPedido,
            hora,
            fecha,
            valorTotal,
            descuento,
        } = req.body;
        const response: QueryResult = await pool.query(
            'UPDATE usuario SET  "id_usuario" = $1, "id_itempedido" = $2, "impuestos" = $3, "tipoEntrega" = $4, "valorDomicilio" = $5 , "estadoDelPedido" = $6, "hora" = $7, "fecha" = $8, "valorTotal" = $9, "descuento" = $10 WHERE codigoOrden = $5',
            [
                id_usuario,
                id_itempedido,
                impuestos,
                tipoEntrega,
                valorDomicilio,
                estadoDelPedido,
                hora,
                fecha,
                valorTotal,
                descuento,
                id_pedido,
            ],
        );
        return res.json({
            message: "Pedido actualizado con ??xito",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json("Internal Server error");
    }
};

export const deletePedido = async (req: Request, res: Response) => {
    const id_pedido = parseInt(req.params.id);
    /*TODO:Servicio de eliminar menu de mongo */
    try {
        const response: QueryResult = await pool.query("DELETE FROM pedido WHERE codigoOrden = $1", [id_pedido]);
        return res.json(response.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json("Internal Server error");
    }
};

//Get for ID
export const getPedidoById = async (req: Request, res: Response): Promise<Response> => {
    const id_pedido = parseInt(req.params.id);
    try {
        const response: QueryResult = await pool.query("SELECT * FROM pedido WHERE codigoOrden = $1", [id_pedido]);
        return res.json(response.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json("Internal Server error");
    }
};

export const ACTstatusPedidoId = async (req: Request, res: Response): Promise<Response> => {
    const id_pedido = parseInt(req.params.id);
    const { status_pedido } = req.body;
    try {
        await pool.query("UPDATE pedido SET estadodelpedido = $1 WHERE codigoOrden = $2", [status_pedido, id_pedido]);
        if (status_pedido === "Entregado") {
            const result: QueryResult = await pool.query("SELECT * FROM pedido WHERE codigoOrden = $1", [id_pedido]);
            const usuario: QueryResult = await pool.query("SELECT * FROM usuario WHERE id_usuario = $1", [
                result.rows[0].id_usuario,
            ]);
            const establecimiento: QueryResult = await pool.query(
                "SELECT * FROM establecimiento WHERE id_establecimiento = $1",
                [result.rows[0].id_establecimiento],
            );
            const direccion: QueryResult = await pool.query("SELECT * FROM direccion WHERE id_establecimiento = $1", [
                result.rows[0].id_establecimiento,
            ]);

            let items = await collections.Pedido.findOne(
                { _id: new ObjectId(result.rows[0].id_itempedido) },
                { projection: { _id: 0, items: 1 } },
            );
            console.log(items);
            let total_compra = result.rows[0].valortotal - result.rows[0].valortotal * (result.rows[0].descuento / 100);
            total_compra =
                total_compra + total_compra * (result.rows[0].impuestos / 100) + result.rows[0].valordomicilio;
            let fecha = JSON.stringify(result.rows[0].fecha).replace(/['"]+/g, "").split("T")[0];

            await sendEmail(
                usuario.rows[0].email,
                {
                    mensaje: "Pedido confirmado!",
                    id_pedido: id_pedido,
                    time_entrega: result.rows[0].hora,
                    Fecha: fecha,
                    Hora: result.rows[0].hora,
                    nombre_establecimiento: establecimiento.rows[0].nombre,
                    ciudad_establecimiento: direccion.rows[0].ciudad,
                    itemfotos: items,
                    subtotal: result.rows[0].valortotal,
                    impuestos: result.rows[0].impuestos,
                    descuento: result.rows[0].descuento,
                    valor_domicilio: result.rows[0].valordomicilio,
                    total_compra: total_compra,
                },
                templateIds.SEND_CODE,
            );
        }
        return res.json("Estado del pedido actualizado con ??xito");
    } catch (error) {
        console.log(error);
        return res.status(500).json("Internal Server error");
    }
};