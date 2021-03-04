
module.exports = function (io, socket){
    socket.on("notify", (args) => {
        console.log('New action on notify web');
        console.log(args);
        io.of('/'+args.nameSpace).to(args.room).emit(args.event, args.data);
    });
}
