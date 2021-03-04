const lsBackEnd = require('../listeners/back-end/');

module.exports = function (io){
    try {
        const backEnd = io.of("/back-end");
        backEnd.on("connection", function (socket) {
            console.log("BackEnd connected");
            //Join to public room
            socket.join('backEnd');
            //Attach listeners
            lsBackEnd(io, socket);
        });
    } catch (e) {
        console.error(e);
    }
}
