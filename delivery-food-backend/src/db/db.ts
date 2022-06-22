import {Pool} from 'pg';
import dotenv from 'dotenv';
dotenv.config();
export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: '12345',
    database: 'deliveryfood',
    port: Number(process.env.POSTGRES_PORT)
});