import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import Menu from "../models/modelMenu";
import Pedido from "../models/modelPedido";
import Rol from "../models/modelRol";
import Calificacion from "../models/modelsCalificacion";

export const collections: {
    Menu?: mongoDB.Collection<Menu>;
    Pedido?: mongoDB.Collection<Pedido>;
    Calificacion?: mongoDB.Collection<Calificacion>;
    Rol?: mongoDB.Collection<Rol>;
} = {};
export async function connectToDatabase() {
    dotenv.config();
    const client = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
    await client.connect();
    const db = client.db(process.env.DB_NAME);
    const pedidoCollection = db.collection<Pedido>(process.env.PEDIDO_COLLECTION_NAME);
    const deliveryCollection = db.collection<Menu>(process.env.DELIVERY_COLLECTION_NAME);
    const calificacionCollection = db.collection<Calificacion>(process.env.CALIFICACION_COLLECTION_NAME);
    const rolCollection = db.collection<Rol>(process.env.ROL_COLLECTION_NAME);
    collections.Pedido = pedidoCollection;
    collections.Menu = deliveryCollection;
    collections.Calificacion = calificacionCollection;
    collections.Rol = rolCollection;
    console.log(
        `Successfully connected to database: ${db.databaseName} and collection: ${deliveryCollection.collectionName} , ${pedidoCollection.collectionName},${calificacionCollection.collectionName},${rolCollection.collectionName}`,
    );

    await db
        .command({
            collMod: [process.env.DELIVERY_COLLECTION_NAME],            
        })
        .catch(async (error: mongoDB.MongoServerError) => {
            if (error.codeName === "NamespaceNotFound") {
                await db.createCollection(process.env.DELIVERY_COLLECTION_NAME);
            }
        });
}
