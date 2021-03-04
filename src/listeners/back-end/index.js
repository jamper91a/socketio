const lsDisconnecting = require('./disconnecting');
const lsNotify = require('./notify');

module.exports = function (io, socket){
    lsDisconnecting(io, socket);
    lsNotify(io, socket);
}
