import swaggerJSDoc from "swagger-jsdoc";
import * as packageInfo from "../../package.json";

// Swagger definition
const swaggerDefinition = {
    openapi: "3.0.3",
    info: {
        title: packageInfo.name,
        version: packageInfo.version,
        description: packageInfo.description,
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
