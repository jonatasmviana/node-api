const routes = require('express').Router();
const authMiddleware = require('../middlewares/auth');
routes.use(authMiddleware);

const UserController = require('../controllers/UserController');
routes.get('/users', UserController.getAllUsers);
routes.get('/user/:userId', UserController.getUserById);
routes.post('/user', UserController.store);
routes.patch('/user/:userId', UserController.update);
routes.delete('/user/:userId', UserController.delete);

module.exports = server => server.use('', routes);