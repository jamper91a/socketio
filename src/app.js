const nameSpaces = require('./namespaces/app');
const config = require('./config');

const io = require('socket.io')(3100, config);
//Adding nameSpaces
console.log('Adding NameSpaces');
nameSpaces(io);
console.log ('Server started: ws://localhost:300');
