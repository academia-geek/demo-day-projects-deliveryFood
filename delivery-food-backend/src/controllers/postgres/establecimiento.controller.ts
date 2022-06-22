import {Request,Response} from 'express';
import {pool} from '../../db/db';
import { QueryResult } from 'pg';
import { ObjectId } from "mongodb";
import { collections } from "../../services/database.service.mongo";

//Get
export const getEstablecimiento = async (req: Request, res: Response):Promise<Response> =>{
    try{
        const response:QueryResult = await pool.query('SELECT * FROM establecimiento ORDER BY id_establecimiento ASC');
        return res.status(200).json(response.rows);
    }catch(e){
        console.log(e);         
        return res.status(500).json('Internal server error');
    }
};

//POST
export const createEstablecimiento = async (req: Request, res:Response) =>{    
    const {estado,operacional,nombre,tipo_menu,items} = req.body;    
    try{
        let {insertedId}= await collections.Menu.insertOne({tipo_menu,items});
        const response : QueryResult = await pool.query('INSERT INTO establecimiento (estado,operacional,nombre,id_menu) VALUES ($1,$2,$3,$4)',[estado,operacional,nombre,insertedId]);
        return res.status(200).json({
            message:"Establecimiento creado con éxito"
        });
    }catch(e){
        console.log(e);
        return res.status(500).json('Internal server error');
    }
}


export const updateEstablecimiento = async (req: Request, res: Response) => {
    const id_establecimiento = parseInt(req.params.id);
    /*TODO:Servicio de actualizar menu de mongo */
    try {
        const {estado,operacional,nombre,id_menu} = req.body;
        const response: QueryResult = await pool.query('UPDATE establecimiento SET  "estado" = $1, "operacional" = $2, "nombre" = $3, "id_menu" = $4 WHERE id_establecimiento = $5', [estado,operacional,nombre,id_menu,id_establecimiento])
        return res.json({
            message:"Establecimiento actualizado con éxito"
        });
    }catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
};

export const deleteEstablecimiento = async (req: Request, res: Response) => {
    const id_establecimiento = parseInt(req.params.id);
    /*TODO:Servicio de eliminar menu de mongo */
    try {
        const response: QueryResult = await pool.query('DELETE FROM establecimiento WHERE id_establecimiento = $1', [id_establecimiento]);
        return res.json(response.rows);
    }catch (error) {
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