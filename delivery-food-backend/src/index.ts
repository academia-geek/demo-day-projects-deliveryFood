import express, { urlencoded } from 'express';
import  swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
const app = express();
import router from './routes/establecimiento.routers';
import routerUsuario from './routes/usuarios.router';
const port = 8070;

app.use(express.json());
app.use('/establecimiento',router);
app.use('/usuario',routerUsuario);

app.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`);
})