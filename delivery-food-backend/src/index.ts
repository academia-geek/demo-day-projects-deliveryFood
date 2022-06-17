import express from 'express';
import morgan from "morgan";
import  swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { connectToDatabase } from "./services/database.service.mongo";
import cors   from 'cors';
import routerMenu from './routes/menu.routes';
var bodyParser=require('body-parser')
import routerEstablecimiento from './routes/establecimiento.routers';
import routerUsuario from './routes/usuarios.router';
import routerPago from './routes/pago.router'
import routerPedido from './routes/pedido.router';
import routerDireccion from './routes/direccion.router';
import routerPosition from './routes/socket.routes';


const app = express();
const port = 8070;
app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
app.use('/establecimiento',routerEstablecimiento);
app.use('/usuario',routerUsuario);
app.use('/pago',routerPago);
app.use('/pedido',routerPedido);
app.use('/direccion',routerDireccion);
app.use('/',routerPosition);



connectToDatabase()
    .then(() => {   
        app.use(morgan("dev"));     
        app.use("/", routerMenu);
        //app.use("/user", userRouter)
        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });