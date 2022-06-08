import { ObjectId } from "mongodb";

export default interface Menu {
    tipo_menu: string;  
    items: Array<items>;
    id?: ObjectId;
};
interface items {    
    nombre: string;            
    descripcion: string;
    categoria: string;
    foto: string;
    valor: number;    
    opcion: Array<opcion>;
    adicionales: Array<adicionales>;
    comentarios: string;
    id_plato?: ObjectId;
};
interface opcion {            
    nombre: string;
    tipo: string;
    opciones: Array<string>;
};
interface adicionales {    
    nombre: string;
    cantidad: number;
    valor: number;
};