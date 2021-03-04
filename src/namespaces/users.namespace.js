module.exports = function (io){
    const users = io.of("/users");
    users.on("connection", function (socket) {
        console.log("User connected");
        //Get id of the user from the token
        var token = '';
        socket.emit("welcome", "welcome man");
        socket.on("disconnecting", (reason) => {
            console.log(reason)
        });
        socket.on("disconnect", (reason) => {
            console.log(reason)
        });
    });
    /**
     * MiddleWare
     */
    try {
        users.use((socket, next) => {
            const token = socket.handshake.auth.token;
            if (isValid(socket.request)) {
                next();
            } else {
                next(new Error("invalid"));
            }
        });
    } catch (e) {
        console.error(e);
    }
}
