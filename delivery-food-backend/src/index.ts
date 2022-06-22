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
import routerDashboard from './routes/dashboard.routes';
import http from 'http';
import { authRouter } from "./routes/firebase.routes";

// import routerSocket from './routes/socket.routes';
const app = express();
import router from './routes/establecimiento.routers';
import routerUsuario from './routes/usuarios.router';
const port = 8070;
const server = http.createServer(app);
const io = require('socket.io')(server);

app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
app.use('/establecimiento',routerEstablecimiento);
app.use('/usuario',routerUsuario);
app.use('/pago',routerPago);
app.use('/pedido',routerPedido);
app.use('/direccion',routerDireccion);
app.use('/',routerDashboard);
app.use("/", authRouter); 

app.use('/establecimiento',router);
app.use('/usuario',routerUsuario);

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