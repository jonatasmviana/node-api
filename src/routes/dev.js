const routes = require('express').Router();
const authMiddleware = require('../middlewares/auth');
routes.use(authMiddleware);

const DevController = require('../controllers/DevController');
routes.get('/devs', DevController.getDevByUserName);
routes.get('/devs/todos', DevController.getAllDevs);
routes.get('/devs/:devId', DevController.getDevById);

module.exports = server => server.use('', routes);