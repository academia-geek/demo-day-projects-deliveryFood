import { ObjectId } from "mongodb";
export default interface Calificación {    
    servicio: Array<calificacion>; 
    entregador: Array<entregador>; 
    id_usuario: number;
    id_pedido: ObjectId;
    id_establecimiento: number; 
    id?: ObjectId;
};
interface calificacion {
    valor: number;
    comentario: string;
};
interface entregador {
    valor: number;
    comentario: string;
}