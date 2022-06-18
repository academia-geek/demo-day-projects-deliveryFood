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

