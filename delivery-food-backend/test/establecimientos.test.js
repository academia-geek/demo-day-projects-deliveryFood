import request from "supertest";
const app = "http://localhost:4000";

const establecimiento = {
    estado: "ACTIVO",
    nombre: "Establecimiento 5",
    operacional: "S",
    id_menu: "1g24h234jk6h324j5k43h",
};

describe("GET /api/establecimientos", () => {
    test("should return a 200 status code & an array of objects", async () => {
        const response = await request(app)
            .get("/api/establecimientos")
            .send()
            .catch((err) => {
                console.log(err);
            });
        expect(response.statusCode).toBe(200);
        expect(response.body).arrayOfObjects;
    });
});
describe("GET /api/establecimientos/:id", () => {
    test("should return a 200 status code & an array of objects ", async () => {
        const response = await request(app)
            .get("/api/establecimientos/1")
            .send()
            .catch((err) => {
                console.log(err);
            });
        expect(response.statusCode).toBe(200);
        expect(response.body).arrayOfObjects;
    });
});
describe("POST /api/establecimientos", () => {
    test("should return a 200 status code & an JSON object ", async () => {
        const response = await request(app)
            .post("/api/establecimientos")
            .send(establecimiento)
            .catch((err) => {
                console.log(err);
            });
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            message: "Establecimiento creado con éxito",
        });
    });
});
describe("PUT /api/establecimientos/:id", () => {
    test("should return a 200 status code & an JSON object ", async () => {
        const response = await request(app)
            .put("/api/establecimientos/7")
            .send(establecimiento)
            .catch((err) => {
                console.log(err);
            });
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            message: "Establecimiento actualizado con éxito",
        });
    });
});
describe("DELETE /api/establecimientos/:id", () => {
    test("should return a 200 status code & an JSON object ", async () => {
        const response = await request(app)
            .delete("/api/establecimientos/7")
            .send()
            .catch((err) => {
                console.log(err);
            });
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            message: "Establecimiento eliminado con éxito",
        });
    });
});
