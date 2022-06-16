import request from "supertest";
const app = "http://localhost:4000";

describe("POST /api/mongo/createMenu", () => {
    test("should return a 200 status code & an JSON object ", async () => {
        const response = await request(app)
            .post("/api/mongo/createMenu")
            .send({
                nombre: "Menu 1",
                descripcion: "Descripcion del menu 1",
                estado: "ACTIVO",
                id_establecimiento: "1",
            })
            .catch((err) => {
                console.log(err);
            }
            );
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ message: "Menu creado correctamente", id: ObjectId("5e8f8f8f8f8f8f8f8f8f8f") });
    }
    );
}
);