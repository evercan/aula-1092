class HealthController{
    static async check(req,res){
        return res.send('OK')
    }
}

module.exports = HealthController