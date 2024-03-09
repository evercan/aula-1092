
const {Dados} = require('../src/index');
const axios = require("axios");
const mockAdapter = require('axios-mock-adapter');

// it('lista de titulo de albuns', async() => {
//     const tituloAlbum = await getTituloAlbum();
//     expect(tituloAlbum).toEqual('quidem molestiae enim');
// });

//const axiosMock = new mockAdapter(axios);

it('testar post com jest.spyOn', async() =>{
//Cria um mock para axios.get
    const axiosSpy  = jest.spyOn(axios,'get');

    // mockar o retorno do get
    const mockData = {"userId": 1,"id": 1,"title": "Teste Title","body": "Teste Body"};

        axiosSpy.mockResolvedValue(mockData);

        // chamar minha funcao
        const data = await Dados.getDataAlbum();

        // Verificando axios 
        expect(axiosSpy).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/posts/1");       

        // verifica os dados de retorno corresponde aos dados simulados    
        expect(data).toEqual(mockData);

});

it('testar post com jest.fn', async() =>{
    //Cria um mock para axios.get
    const axiosMock = jest.fn();

    // substituição da requi axios.get pelo mock
    axios.get = axiosMock;
    const dataMock = [{"userId": 1,
                "id": 1,
                "title": "novo"
                },
                {
                "userId": 1,
                "id": 2,
                "title": "sunt qui excepturi placeat culpa"
                }];
    
        axiosMock.mockResolvedValue(dataMock);

        // chamar minha funcao
        const data = await Dados.getDataAlbum();

        expect(axiosMock).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/posts/1");       

        // verifica os dados de retorno corresponde aos dados simulados    
        expect(data).toEqual(dataMock);

})
// it('lista de titulo de albuns', async() =>{
//     const dataMock = [{
//         "userId": 1,
//         "id": 1,
//         "title": "novo"
//         },
//         {
//         "userId": 1,
//         "id": 2,
//         "title": "sunt qui excepturi placeat culpa"
//         }];

//         axiosMock.onGet("https://jsonplaceholder.typicode.com/albums").reply(200,dataMock);

//         const tituloAlbum = await Dados.getTituloAlbum();
//         console.log(tituloAlbum);

//         expect(tituloAlbum).toEqual('novo');


