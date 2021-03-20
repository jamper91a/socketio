/**
 * This event is emitted from the front-end (angular)
 * sockets-service.ts joinRoom
 * @param {*} io
 * @param {*} socket
 * @param {userId: number, name: string, country: string} data
 */
module.exports = function (io, socket){
    socket.on("join-to-chat", (args) => {
        socket.join('public-chat/'+args.room)

        /**
         * Emit a message to the rest to let them know a new user arrived
         * This is being listen by the front-end
         */

        socket.to('public-chat/'+args.room).emit('user-joined', args.data);
        /**
         *  Emit a message to the back-end that an user join to the chat
         */
        //Attach jwt
        args.jwt = socket.jwt;
        io.of('/back-end').to('backEnd').emit('user-join-chat', args);
    });
}
