import { ObjectId } from "mongodb";

export default interface DeliveryFood {
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