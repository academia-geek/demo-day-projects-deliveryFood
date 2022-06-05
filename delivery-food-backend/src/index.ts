import express from 'express';
import morgan from "morgan";
import  swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { connectToDatabase } from "./services/database.service.mongo";
import cors   from 'cors';
import router from './routes/routes';


const app = express();
const port = 8070;
app.use(cors());
app.use(express.json());


connectToDatabase()
    .then(() => {   
        app.use(morgan("dev"));     
        app.use("/", router);
        //app.use("/user", userRouter)
        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });