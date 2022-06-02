import express from 'express';
import  swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
const app = express();
const port = 8070;


app.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`);
})