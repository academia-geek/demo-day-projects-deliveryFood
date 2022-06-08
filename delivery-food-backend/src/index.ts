import express from 'express';
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
const app = express();
dotenv.config();

import router from './routes/establecimiento.router';
import routerUsuario from './routes/usuarios.router';
import swaggerSpec from './docs/swagger-spec';
import routerPago from './routes/pago.router'
import routerPedido from './routes/pedido.router';
import routerDireccion from './routes/direccion.router';

const port = process.env.PORT || 3000;

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/establecimientos', router);
app.use('/api/usuarios', routerUsuario);
app.use('/api/pagos',routerPago);
app.use('/api/pedidos',routerPedido);
app.use('/api/direccion',routerDireccion);

// Initialize swagger-jsdoc
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Start server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
})