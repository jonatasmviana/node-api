const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const server = express();

const port = 3333;
const user = 'user';
const pass = 'pass';
const cluster = 'cluester';
const baseName = 'basename';
const urlConnect = 'mongodb+srv://' + user + ':' + pass + cluster + '/' + baseName + '?retryWrites=true&w=majority';

mongoose.connect(urlConnect, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(port);