import * as app from '../routes/usuarios.router';
import request from 'supertest';

describe('Usuarios', () => {
    it('GET /usuarios', async () => {
        const response = await request(app).get('/usuarios');
        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(2);
    });
});

//isn't working need to fix