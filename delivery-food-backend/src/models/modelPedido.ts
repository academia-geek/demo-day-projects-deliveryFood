import { ObjectId } from "mongodb";

export default interface Pedido {    
    items: Array<detalles>;    
    id?: ObjectId;
};
interface detalles{
    nombre_producto: string;
    cantidad: number;
    valor: number;
    adicionales: Array<adicionales>
    opciones: Array<string>
}
interface adicionales{
    nombre: string;
    cantidad: number;
    valor: number;
}

