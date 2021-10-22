const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());
require('./router')(server);

const authConfig = require('./config/connection.json');
const urlConnect = 'mongodb+srv://'
	.concat(authConfig.user)
	.concat(':')
	.concat(authConfig.pass)
	.concat(authConfig.cluster)
	.concat('/')
	.concat(authConfig.baseName)
	.concat('?retryWrites=true&w=majority');

mongoose.connect(urlConnect, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

server.listen(authConfig.port);