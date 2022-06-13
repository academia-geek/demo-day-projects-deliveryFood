import request from "supertest";
const app = "http://localhost:4000";

const usuario = {
    nombre: "Juan",
    apellido: "Perez",
    telefono: 123456789,
    tipo: "Usuario",
    email: "mail6@example.com",
};

describe("GET /api/usuarios", () => {
    test("should return a 200 status code & an array of objects", async () => {
        const response = await request(app)
            .get("/api/usuarios")
            .send()
            .catch((err) => {
                console.log(err);
            });
        expect(response.statusCode).toBe(200);
        expect(response.body).arrayOfObjects;
    });
});
describe("GET /api/usuarios/:id", () => {
    test("should return a 200 status code & an array of objects ", async () => {
        const response = await request(app)
            .get("/api/usuarios/1")
            .send()
            .catch((err) => {
                console.log(err);
            });
        expect(response.statusCode).toBe(200);
        expect(response.body).arrayOfObjects;
    });
});
describe("POST /api/usuarios", () => {
    test("should return a 200 status code & an JSON object ", async () => {
        const response = await request(app)
            .post("/api/usuarios")
            .send(usuario)
            .catch((err) => {
                console.log(err);
            });
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeObject;
    });
});
describe("PUT /api/usuarios/:id", () => {
    test("should return a 200 status code & an JSON object ", async () => {
        const response = await request(app)
            .put("/api/usuarios/7")
            .send(usuario)
            .catch((err) => {
                console.log(err);
            });
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeObject;
    });
});
describe("DELETE /api/usuarios/:id", () => {
    test("should return a 200 status code & an JSON object ", async () => {
        const response = await request(app)
            .delete("/api/usuarios/7")
            .send()
            .catch((err) => {
                console.log(err);
            });
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeObject;
    }, 10000);
}, 10000);

// {
//     id_usuario: expect.any(Number),
//     nombre: expect.any(String),
//     apellido: expect.any(String),
//     telefono: expect.any(String),
//     tipo: expect.any(String),
//     email: expect.any(String),
// }
