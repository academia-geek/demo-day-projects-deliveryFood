import { ObjectId } from "mongodb";

export default interface Pedido {    
    items: Array<detalles>;    
    id?: ObjectId;
};
interface detalles{
    nombre_producto: string;
    descripcion: string;
    foto: string;
    cantidad: number;
    valor: number;  
    
}