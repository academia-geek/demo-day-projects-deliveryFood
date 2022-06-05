import swaggerJSDoc from "swagger-jsdoc";

// Swagger definition
const swaggerDefinition = {
    openapi: "3.0.3",
    info: {
        title: "API REST delivery food",
        version: "0.1.0",
        description: "API REST para consumo de la aplicacion delivery food",
    },
    servers: [
        {
            url: `http://localhost:${process.env.PORT}`,
        },
    ],
};

// Options for the swagger docs
const options = {
    swaggerDefinition,
    apis: ['**/*.router.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
// ./routes/*.router
//./docs/openAPI/*.yaml
