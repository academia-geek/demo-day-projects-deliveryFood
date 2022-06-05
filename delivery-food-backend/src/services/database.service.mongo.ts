import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import DeliveryFood from "../models/modelDeliveryFood";
import Pedido from "../models/modelPedido";

export const collections: { DeliveryFood?: mongoDB.Collection<DeliveryFood>, Pedido? : mongoDB.Collection<Pedido>} = {};
export async function connectToDatabase() {    
    dotenv.config();
    const client = new mongoDB.MongoClient(process.env.DB_CONN_STRING);    
    await client.connect();    
    const db = client.db(process.env.DB_NAME);  
    const pedidoCollection =  db.collection<Pedido>(process.env.PEDIDO_COLLECTION_NAME);
    const deliveryCollection = db.collection<DeliveryFood>(process.env.DELIVERY_COLLECTION_NAME); 
    collections.Pedido = pedidoCollection;       
    collections.DeliveryFood = deliveryCollection;
     console.log(
         `Successfully connected to database: ${db.databaseName} and collection: ${deliveryCollection.collectionName} , ${pedidoCollection.collectionName}`,
     );
         
     await db.command({
        collMod: [process.env.DELIVERY_COLLECTION_NAME]
    }).catch(async (error: mongoDB.MongoServerError) =>{
        if(error.codeName === 'NamespaceNotFound'){
            await db.createCollection(process.env.DELIVERY_COLLECTION_NAME);
                }
    });
}