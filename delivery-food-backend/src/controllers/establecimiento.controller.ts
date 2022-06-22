import {Request,Response} from 'express';
import {pool} from '../db/db';
import { QueryResult } from 'pg';

//Get
export const getEstablecimiento = async (req: Request, res: Response):Promise<Response> =>{
    try{
        const response:QueryResult = await pool.query('SELECT * FROM establecimiento ORDER BY id ASC');
        return res.status(200).json(response.rows);
    }catch(e){
        console.log(e);         
        return res.status(500).json('Internal server error');
    }
};

//POST
export const createEstablecimiento = async (req: Request, res:Response):Promise<Response> =>{
    const {descripcion,numeroCasa,nomenclatura,barrio,latitud,longitud,nombreUnidad,ciudad,tipo} = req.body;
    try{
        const response:QueryResult = await pool.query('INSERT INTO establecimiento (descripcion,numeroCasa,nomenclatura,barrio,latitud,longitud,nombreUnidad,ciudad,tipo) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)',[descripcion,numeroCasa,nomenclatura,barrio,latitud,longitud,nombreUnidad,ciudad,tipo]);
        return res.status(200).json(response.rows);
    }catch(e){
        console.log(e);
        return res.status(500).json('Internal server error');
    }
}