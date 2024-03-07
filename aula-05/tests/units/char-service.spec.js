const CharacterService = require('../../src/services/char-services')
require('dotenv').config()

describe('Testes da API Rick and Mort API', ()=>{
    // lista os personagens batendo numa aPI
    it('Devo retornar a lista de personagens', async ()=>{
        const page = 1
        const response = await CharacterService.get(page)
        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty('info');
      //  expect(response[0].id).toBe(1);        
    });
    // Retornar um erro ao tentar acessar uma rota inexistente
    

});