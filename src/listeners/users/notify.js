
module.exports = function (io, socket){
    socket.on("notify", (args) => {
        console.log('New action on notify users');
        console.log(args);
        io.of('/users').to(args.room).emit(args.event, args.data);
    });
}
