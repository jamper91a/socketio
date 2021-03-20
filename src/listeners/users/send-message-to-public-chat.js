/**
 * This event is emitted from the front-end (angular)
 * sockets-service.ts joinRoom
 * @param {*} io
 * @param {*} socket
 * @param {userId: number, name: string, country: string} data
 */
module.exports = function (io, socket){
    socket.on("send-message-to-public-chat", (args) => {

        /**
         * Emit a message to the rest to let them know a new user arrived
         * This is being listen by the front-end
         */

        socket.to('public-chat/'+args.room).emit(args.event, args);
    });
}
