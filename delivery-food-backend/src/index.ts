
import dotenv from 'dotenv';
import express, { urlencoded } from 'express';
import morgan from "morgan";
import swaggerUi from 'swagger-ui-express';
import { connectToDatabase } from "./services/database.service.mongo";
import cors   from 'cors';
import routerMenu from './routes/menu.router';
var bodyParser=require('body-parser')
import routerEstablecimiento from '../src/routes/establecimiento.router';
import routerUsuario from './routes/usuarios.router';
import routerPago from './routes/pago.router'
import routerPedido from './routes/pedido.router';
import routerDireccion from './routes/direccion.router';
import routerDashboard from './routes/dashboard.router';
import http from 'http';
import { authRouter } from "./routes/firebase.router";
import router from './routes/mongo.router';
import swaggerSpec from './docs/swagger-spec';
var bodyParser = require('body-parser')
dotenv.config();

// import routerSocket from './routes/socket.routes';
const app = express();

const server = http.createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// Initialize swagger-jsdoc
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

connectToDatabase()
    .then(() => {
        app.use(morgan("dev"));
        app.use("/api/mongo", router);
        // Routes
        app.use('/api/establecimientos', routerEstablecimiento);
        app.use('/api/usuarios', routerUsuario);
        app.use('/api/pagos', routerPago);
        app.use('/api/pedidos', routerPedido);
        app.use('/api/direccion', routerDireccion);

        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });
