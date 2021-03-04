
module.exports = function (io, socket){
    socket.on("joinRoom", (args) => {
        console.log('Joining room: ', args);
        socket.join(args.room)
    });
}
