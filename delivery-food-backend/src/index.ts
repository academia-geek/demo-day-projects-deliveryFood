
import dotenv from 'dotenv';
import express, { urlencoded } from 'express';
import morgan from "morgan";
import swaggerUi from 'swagger-ui-express';
import { connectToDatabase } from "./services/database.service.mongo";
import router from './routes/mongo.router';
var bodyParser = require('body-parser')
dotenv.config();
import cors from 'cors';
import routerMenu from './routes/menu.routes';
var bodyParser = require('body-parser')
import routerEstablecimiento from './routes/establecimiento.routers';
import routerUsuario from './routes/usuarios.router';
import routerPago from './routes/pago.router'
import routerPedido from './routes/pedido.router';
import routerDireccion from './routes/direccion.router';
import routerDashboard from './routes/dashboard.routes';
import http from 'http';
import { authRouter } from "./routes/firebase.routes";
import swaggerSpec from './docs/swagger-spec';
// import routerSocket from './routes/socket.routes';
const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(morgan('dev'));
const server = http.createServer(app);
const io = require('socket.io')(server);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// Initialize swagger-jsdoc
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/mongo", router);
app.use('/api/establecimientos', routerEstablecimiento);
app.use('/api/usuarios', routerUsuario);
app.use('/api/pagos', routerPago);
app.use('/api/pedidos', routerPedido);
app.use('/api/direccion', routerDireccion);
app.use('/api/dash', routerDashboard);
app.use("/api/auth", authRouter);


app.use(express.static("./dist/client"));

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/client/index.html");
//   });  

// io.on('connection', (socket: { id: any; on: (arg0: string, arg1: () => void) => void; emit: (arg0: string) => void; }) => {
//     console.log('a user connected', socket.id);
//     socket.on('ping',() => {
//         socket.emit('pong');
// })});

connectToDatabase()
    .then(() => {
        app.use(morgan("dev"));
        app.use("/", routerMenu);
        //app.use("/user", userRouter)
        server.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });
