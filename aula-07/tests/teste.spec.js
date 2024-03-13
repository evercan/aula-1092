const request = require('supertest');

const app = require('../src/app');

describe('Testando a API', () =>{
    test('Deve retornar a mensagem', async() => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Hello world');
    });
}); 