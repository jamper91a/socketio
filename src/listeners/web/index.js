const lsDisconnecting = require('./disconnecting');
const lsNotify = require('./notify');
const lsJoinRoom = require('./joinRoom');

module.exports = function (io, socket){
    lsDisconnecting(io, socket);
    lsNotify(io, socket);
    lsJoinRoom(io, socket);
}
