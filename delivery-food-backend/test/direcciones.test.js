import request from "supertest";
const app = "http://localhost:4000";

const direccion = {
    id_establecimiento: 3,
    descripcion: "Calle falsa 123 piso x",
    direccion: "Calle falsa 123",
    nombreBarrio: "Caballito",
    latitud: "34.6037",
    longitud: "58.3816",
    unidad: "km",
    ciudad: "Cordoba",
    id_usuario: 1,
};

describe("GET /api/direccion", () => {
    test("should return a 200 status code & an array of objects", async () => {
        const response = await request(app)
            .get("/api/direccion")
            .send()
            .catch((err) => {
                console.log(err);
            });
        expect(response.statusCode).toBe(200);
        expect(response.body).arrayOfObjects;
    });
});
describe("GET /api/direccion/:id", () => {
    test("should return a 200 status code & an array of objects ", async () => {
        const response = await request(app)
            .get("/api/direccion/1")
            .send()
            .catch((err) => {
                console.log(err);
            });
        expect(response.statusCode).toBe(200);
        expect(response.body).arrayOfObjects;
    });
});
describe("POST /api/direccion", () => {
    test("should return a 200 status code & an JSON object ", async () => {
        const response = await request(app)
            .post("/api/direccion")
            .send(direccion)
            .catch((err) => {
                console.log(err);
            });
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            message: "Dirección registrada con éxito",
        });
    });
});
describe("PUT /api/direccion/:id", () => {
    test("should return a 200 status code & an JSON object ", async () => {
        const response = await request(app)
            .put("/api/direccion/1")
            .send(direccion)
            .catch((err) => {
                console.log(err);
            });
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            message: "Dirección actualizada con éxito",
        });
    });
});
describe("DELETE /api/direccion/:id", () => {
    test("should return a 200 status code & an JSON object ", async () => {
        const response = await request(app)
            .delete("/api/direccion/1")
            .send()
            .catch((err) => {
                console.log(err);
            });
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            message: "Dirección eliminada con éxito",
        });
    });
});
