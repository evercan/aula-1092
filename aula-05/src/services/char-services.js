const axios = require('axios')

class CharacterService {
    static async get (page = 1){
        const response =  await axios.get(`${process.env.RICK_AND_MORTY_API}/character?page=${page}`)

        const dados = response.data.results.map(char => {
            return {
                id: char.id,
                name: char.name,
                status: char.status,
                type: char.type,
                gender: char.gender
            }
        })
        
        return response
    }
}

module.exports = CharacterService;