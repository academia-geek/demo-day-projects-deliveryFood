import  { Request, Response } from "express";
import {sendEmail} from "../../utilities/sendgrid";
import templateIds from "../../services/templateid.const";
import confirmacion from "../../services/idconfirmacion.const";
import { pool } from "../../db/db";
import { QueryResult } from "pg";
import { collections } from "../../services/database.service.mongo";
import { ObjectId } from "mongodb";



export const mailConfig = async (req: Request, res: Response) => {
    const codigo_orden = parseInt(req.params.id);
    try{
    const result: QueryResult = await pool.query("SELECT * FROM pedido WHERE codigoOrden = $1", [codigo_orden]);
    const usuario: QueryResult = await pool.query("SELECT * FROM usuario WHERE id_usuario = $1", [result.rows[0].id_usuario]);
    const establecimiento: QueryResult = await pool.query("SELECT * FROM establecimiento WHERE id_establecimiento = $1", [result.rows[0].id_establecimiento]);
    const direccion: QueryResult = await pool.query("SELECT * FROM direccion WHERE id_establecimiento = $1", [result.rows[0].id_establecimiento]);
      
    let items = await collections.Pedido.findOne(
        { _id: new ObjectId("62ad55757f97f80df86b27c7") },
        { projection: { _id: 0,items: 1 } },
    );  
    let total_compra = (result.rows[0].valortotal - (result.rows[0].valortotal*(result.rows[0].descuento/100)))
    total_compra = total_compra + (total_compra*(result.rows[0].impuestos/100))+ result.rows[0].valordomicilio    
    let fecha = ((JSON.stringify(result.rows[0].fecha)).replace(/['"]+/g, '')).split("T")[0]
  
    await sendEmail(
        usuario.rows[0].email,
            {
                mensaje: "Pedido confirmado!",
                id_pedido:codigo_orden,
                time_entrega : result.rows[0].hora,
                Fecha: fecha,
                Hora: result.rows[0].hora,
                nombre_establecimiento: establecimiento.rows[0].nombre,
                ciudad_establecimiento: direccion.rows[0].ciudad,
                itemfotos: items, 
                subtotal: result.rows[0].valortotal,
                impuestos: result.rows[0].impuestos,
                descuento: result.rows[0].descuento,
                valor_domicilio: result.rows[0].valordomicilio,
                total_compra: total_compra
            },
            templateIds.SEND_CODE,
        );
        res.status(200).send("Email sent");
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
};

export const mailRegistro = async (req: Request, res: Response) => {
    const codigo_orden = parseInt(req.params.id);
    try{
    const result: QueryResult = await pool.query("SELECT * FROM pedido WHERE codigoOrden = $1", [codigo_orden]);
    const usuario: QueryResult = await pool.query("SELECT * FROM usuario WHERE id_usuario = $1", [result.rows[0].id_usuario]);
    const establecimiento: QueryResult = await pool.query("SELECT * FROM establecimiento WHERE id_establecimiento = $1", [result.rows[0].id_establecimiento]);
    const direccion: QueryResult = await pool.query("SELECT * FROM direccion WHERE id_establecimiento = $1", [result.rows[0].id_establecimiento]);
      
    let items = await collections.Pedido.findOne(
        { _id: new ObjectId("62ad55757f97f80df86b27c7") },
        { projection: { _id: 0,items: 1 } },
    );  
    let total_compra = (result.rows[0].valortotal - (result.rows[0].valortotal*(result.rows[0].descuento/100)))
    total_compra = total_compra + (total_compra*(result.rows[0].impuestos/100))+ result.rows[0].valordomicilio    
    let fecha = ((JSON.stringify(result.rows[0].fecha)).replace(/['"]+/g, '')).split("T")[0]
  
    await sendEmail(
        usuario.rows[0].email,
            {
                mensaje: "Pedido confirmado!",
                id_pedido:codigo_orden,
                time_entrega : result.rows[0].hora,
                Fecha: fecha,
                Hora: result.rows[0].hora,
                nombre_establecimiento: establecimiento.rows[0].nombre,
                ciudad_establecimiento: direccion.rows[0].ciudad,
                itemfotos: items, 
                subtotal: result.rows[0].valortotal,
                impuestos: result.rows[0].impuestos,
                descuento: result.rows[0].descuento,
                valor_domicilio: result.rows[0].valordomicilio,
                total_compra: total_compra
            },
            confirmacion.SEND_CODE_REGISTRO,
        );
        res.status(200).send("Email sent");
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
};
