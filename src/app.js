const nameSpaces = require('./namespaces/');
const config = require('./config');

const io = require('socket.io')(3100, config);
//Adding nameSpaces
nameSpaces(io);
