import request from "supertest";
const app = "http://localhost:4000";

const pago_data = {
    id_usuario: 1,
    id_establecimiento: 1,
    id_pedido: 2,
    metodoPago: "Efectivo",
    fecha: "2020-01-01",
    cantidad: 100,
};

describe("GET /api/pagos", () => {
    test("should return a 200 status code & an array of objects", async () => {
        const response = await request(app)
            .get("/api/pagos")
            .send()
            .catch((err) => {
                console.log(err);
            });
        expect(response.statusCode).toBe(200);
        expect(response.body).arrayOfObjects;
    });
});
describe("GET /api/pagos/:id", () => {
    test("should return a 200 status code & an array of objects ", async () => {
        const response = await request(app)
            .get("/api/pagos/1")
            .send()
            .catch((err) => {
                console.log(err);
            });
        expect(response.statusCode).toBe(200);
        expect(response.body).arrayOfObjects;
    });
});
describe("POST /api/pagos", () => {
    test("should return a 200 status code & an JSON object ", async () => {
        const response = await request(app)
            .post("/api/pagos")
            .send(pago_data)
            .catch((err) => {
                console.log(err);
            });
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeObject;
    });
});
describe("PUT /api/pagos/:id", () => {
    test("should return a 200 status code & an JSON object ", async () => {
        const response = await request(app)
            .put("/api/pagos/1")
            .send(pago_data)
            .catch((err) => {
                console.log(err);
            });
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeObject;
    });
});
describe("DELETE /api/pagos/:id", () => {
    test("should return a 200 status code & an JSON object ", async () => {
        const response = await request(app)
            .delete("/api/pagos/1")
            .send()
            .catch((err) => {
                console.log(err);
            });
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeObject;
    });
});