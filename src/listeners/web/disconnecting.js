
module.exports = function (io, socket){
    socket.on("disconnecting", (reason) => {
        console.log(reason);
    });
}
