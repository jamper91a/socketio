const lsDisconnecting = require('./disconnecting');
const lsNotify = require('./notify');
const lsJoinToChat = require('./jointToChat');
const lsSendMessageToPublicChat = require('./send-message-to-public-chat');

module.exports = function (io, socket){
    lsDisconnecting(io, socket);
    lsNotify(io, socket);
    lsJoinToChat(io, socket);
    lsSendMessageToPublicChat(io, socket);
}
