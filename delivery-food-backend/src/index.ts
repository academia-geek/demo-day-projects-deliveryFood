import express, { urlencoded } from 'express';
import  swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
const app = express();
import router from './routes/establecimiento.routers';
import routerUsuario from './routes/usuarios.router';
import routerPago from './routes/pago.router'
import routerPedido from './routes/pedido.router';
import routerDireccion from './routes/direccion.router';
const port = 8070;

app.use(express.json());
app.use('/establecimiento',router);
app.use('/usuario',routerUsuario);
app.use('/pago',routerPago);
app.use('/pedido',routerPedido);
app.use('/direccion',routerDireccion);

app.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`);
})