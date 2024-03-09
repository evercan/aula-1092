const axios = require('axios');

class Dados {
    static async  getTituloAlbum() {
        const response = await axios.get("https://jsonplaceholder.typicode.com/albums");
        
        return response.data[0].title;
    }

    static async  getDataAlbum() {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
            return response;
        }catch(error){
            console.error('erro de requisicao: ', error);
            throw error;
        }
        
    }
}

module.exports = {Dados};
