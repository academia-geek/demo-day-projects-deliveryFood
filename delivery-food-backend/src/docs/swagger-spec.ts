import swaggerJSDoc from "swagger-jsdoc";

// Swagger definition
const swaggerDefinition = {
    openapi: "3.0.3",
    info: {
        title: "delivery-food-api",
        version: '0.1.3',
        description: "API for consumption of the aplication delivery food",
    },
    servers: [
        {
            url: [`http://35.225.227.102`],
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
