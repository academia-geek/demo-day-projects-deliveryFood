import { ObjectId } from "mongodb";

export default interface Rol {    
    rol: string;    
    endpoints: Array<string>;
    id?: ObjectId;
};
