import * as app from '../routes/usuarios.router';
import supertest from 'supertest';

const api = supertest(app);


test('GET /api/usuarios/:documento', async () => {
await api.post('/api/usuarios')
    .send({
        "nombre": "Juan",
        "apellido": "Perez",
        "telefono": 123456789,
        "tipo": "cliente",
        "email": "mail@example.com"
    })
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
        if (err) {
            console.log(err);
        }
        expect(res.body.nombre).toBe('Juan');
        expect(res.body.apellido).toBe('Perez');
        expect(res.body.telefono).toBe(123456789);
        expect(res.body.tipo).toBe('cliente');
        expect(res.body.email).toBe('mail@example.com');
    });
});

//isn't working need to fix