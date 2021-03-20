/**
 * This event is emitted from the front-end (angular)
 * sockets-service.ts joinRoom
 * @param {*} io
 * @param {*} socket
 * @param {userId: number, name: string, country: string} data
 */
module.exports = function (io, socket){
    socket.on("joinRoom", (args) => {
        // socket.join(args.room)
        // //Emite a message to the rest to let them know a new user arrived
        // socket.to(args.room).emit('user-joined', args.data);
        // //Notify BackEnd user joined
        // io.of('/back-end').to('backEnd').emit('user-join-chat', args);
    });
}
