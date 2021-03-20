
module.exports = function (io, socket){
    socket.on("disconnecting", (reason) => {
        console.log('User disconnecting', socket.jwt);
        const rooms = Object.keys(socket.rooms);
        const socketId = socket.id
        //Notify BackEnd user left
        io.of('/back-end').to('backEnd').emit('user-disconnect', {jwt: socket.jwt, socketId, rooms});
    });
}
