const CharacterService = require('../services/char-services')

class CharacterController{
    static async list (req, res){
        const {page} = req.query
        try {
            const character = await CharacterService.get(page)
            res.status(200).json(character)
        }catch (error){
            res.status(500).json({error : 'Erro ao obter informações'})
        }
    }
}

module.exports = CharacterController