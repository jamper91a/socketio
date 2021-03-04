const lsWeb = require('../listeners/web/');

module.exports = function (io)
{
    const web = io.of("/web");
    web.on("connection", function (socket) {
        console.log("Web connected");
        //Join to public room
        socket.join('public');
        //Attach listeners
        lsWeb(io, socket);
    });
}
