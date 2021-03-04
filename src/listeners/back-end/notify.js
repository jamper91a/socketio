
module.exports = function (io, socket){
    socket.on("notify", (args) => {
        console.log('New action on notify back-end');
        console.log(args);
        io.of('/'+args.nameSpace).to(args.room).emit(args.event, args.data);
    });
}
