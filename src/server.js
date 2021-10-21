const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());
require('./router')(server);


const port = 3333;
const user = 'user';
const pass = 'pass';
const cluster = 'cluster';
const baseName = 'basename';
const urlConnect = 'mongodb+srv://' + user + ':' + pass + cluster + '/' + baseName + '?retryWrites=true&w=majority';

mongoose.connect(urlConnect, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

server.listen(port);