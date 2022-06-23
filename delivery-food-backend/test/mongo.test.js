import { ObjectId } from "mongodb";
import request from "supertest";
const app = "http://localhost:4000";

const datos_menu ={ "tipo_menu": "Típico",
"items":[ {
          "nombre": "Porción patacones",
          "categoria": "Entrada",
          "descripcion": "Gran porcion de patacones fritos con ahogao o guacamole",
          "foto":"https://ibb.co/X2SF4ym",
          "valor": 5000,
          "opcion": [{
                    "nombre": "Escoge tú salsa",
                    "tipo": "Obligatorio",
                    "opciones": ["Guacamole","Ahogao"]
                  }]
        },
        {
          "nombre": "Sancocho de Gallina",
          "categoria": "Plato Fuerte",
          "descripcion": "Incluye sopa de 400ml con papa, yuca, platano y mazorca, acompaña una porción de arroz y tajada de aguacate",
          "foto":"https://ibb.co/RD6LR5T",
          "valor": 26000,
          "opcion": [{}]
        }
      ]
}

const datos_items = {
    "nombre": "Porción patacones",
    "categoria": "Entrada",
    "descripcion": "Gran porcion de patacones fritos con ahogao o guacamole",
    "foto": "https://ibb.co/X2SF4ym",
    "valor": 5000,
    "opcion": [
        {
            "nombre": "Escoge tú salsa",
            "tipo": "Obligatorio",
            "opciones": ["Guacamole", "Ahogao"],
        },
    ],
};
describe("GET /api/mongo/getMenu/{id}", () => {
    it("should return an array of objects", async () => {
        const res = await request(app).get("/api/mongo/getMenu/62a01857159f0e05139a64fa").expect(200);
        expect(res.body).toHaveProperty("tipo_menu");
        expect(res.body).toHaveProperty("items");
        expect(res.body).arrayOfObjects;
    });
});

describe("POST /api/mongo/createMenu", () => {
    it("should return a response with message", async () => {
        const res = await request(app).post("/api/mongo/createMenu").send(datos_menu).expect(200);
        expect(res.body).toEqual({
            message: "Menu creado correctamente",
            id: expect.any(String),
        });
    });
});

describe("POST /api/mongo/createItems/{id}", () => {
    it("should return a mongo document", async () => {
        const res = await request(app)
            .post("/api/mongo/createItems/62b0b17d05b1d441876220ae")
            .send(datos_items)
            .expect(200);
        expect(res.body).toEqual({
            message: "Items agregados",
        });
    });
});
describe("DELETE /api/mongo/deleteMenu/{id}", () => {
    it("should return a json response", async () => {
        const res = await request(app).delete("/api/mongo/deleteMenu/62b0b1c005b1d441876220af").expect(200);
        expect(res.body).toEqual({
            message: "Menu eliminado correctamente",
        });
    }
    );
}
);
describe("DELETE /api/mongo/deleteItems/{id}", () => {
    it("should return a json response", async () => {
        const res = await request(app).delete("/api/mongo/deleteItems/62b0b66a195f79e229883337").expect(200);
        expect(res.body).toEqual({
            message: "Item eliminado",
        });
    }
    );
}
);
describe("PATCH /api/mongo/editMenu/{id}", () => {
    it("should return a json response", async () => {
        const res = await request(app).patch("/api/mongo/editMenu/62b0b17d05b1d441876220ae").send(datos_menu).expect(200);
        expect(res.body).toEqual({
            message: "Tipo de menú actualizado",
        });
    }
    );
}
);
describe("PATCH /api/mongo/editItems/{id}", () => {
    it("should return a json response", async () => {
        const res = await request(app).patch("/api/mongo/editItems/62b0b673195f79e229883339").send(datos_items).expect(200);
        expect(res.body).toEqual({
            message: "Items editados",
        });
    }
    );
}
);
