const routes = require('express').Router();
const AuthController = require('../controllers/AuthController');

routes.post('/authenticate', AuthController.authenticate);

module.exports = server => server.use('', routes);