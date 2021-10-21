const routes = require('express').Router();
const UserController = require('../controllers/UserController');

routes.get('/users', UserController.getAllUsers);
routes.get('/user/:userId', UserController.getUserById);
routes.post('/user', UserController.store);
routes.put('/user/:userId', UserController.update);
routes.delete('/user/:userId', UserController.delete);

module.exports = routes;