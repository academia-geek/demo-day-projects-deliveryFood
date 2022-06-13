import request from "supertest";
const app = "http://localhost:4000";

const pedido = {
    id_usuario: 1,
    id_itempedido: "1",
    impuestos: 2,
    tipoEntrega: "Domicilio",
    valorDomicilio: 2,
    estadoDelPedido: "Recibido",
    hora: "12:00",
    fecha: "2020-01-01",
    valorTotal: 2,
    descuento: 0,
};

describe("GET /api/pedidos", () => {
    test("should return a 200 status code & an array of objects", async () => {
        const response = await request(app)
            .get("/api/pedidos")
            .send()
            .catch((err) => {
                console.log(err);
            });
        expect(response.statusCode).toBe(200);
        expect(response.body).arrayOfObjects;
    });
});

describe("GET /api/pedidos/:id", () => {
    test("should return a 200 status code & an array of objects ", async () => {
        const response = await request(app)
            .get("/api/pedidos/1")
            .send()
            .catch((err) => {
                console.log(err);
            });
        expect(response.statusCode).toBe(200);
        expect(response.body).arrayOfObjects;
    });
});

describe("POST /api/pedidos", () => {
    test("should return a 200 status code & an JSON object ", async () => {
        const response = await request(app)
            .post("/api/pedidos")
            .send(pedido)
            .catch((err) => {
                console.log(err);
            });
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            message: "Pedido creado con éxito",
        });
    });
});

describe("PUT /api/pedidos/:id", () => {
    test("should return a 200 status code & an JSON object ", async () => {
        const response = await request(app)
            .put("/api/pedidos/7")
            .send(pedido)
            .catch((err) => {
                console.log(err);
            });
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            message: "Pedido actualizado con éxito",
        });
    });
});

describe("DELETE /api/pedidos/:id", () => {
    test("should return a 200 status code & an JSON object ", async () => {
        const response = await request(app)
            .delete("/api/pedidos/1")
            .send()
            .catch((err) => {
                console.log(err);
            });
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            message: "Pedido eliminado con éxito",
        });
    });
});
