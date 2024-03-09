const {Router} = require('express');
const routes = new Router()

const CharacterController = require('./controllers/char-ctrl')
const HealthController = require('./controllers/health-ctrl')

routes.get('/health', HealthController.check);
routes.get('/personagem', CharacterController.list);

module.exports = routes;