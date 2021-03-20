const jwt = require('jsonwebtoken');
const lsUsers = require('../listeners/users/');
module.exports = function (io){
    const users = io.of("/users");
    users.on("connection", function (socket) {
        console.log("User connected", socket.jwt.user.email);
        lsUsers(io, socket);
    });
    /**
     * MiddleWare
     */
    try {
        users.use((socket, next) => {
            const token = socket.handshake.query.token;
            jwt.verify(token, '$JSHDFS24@3', {ignoreExpiration: true},function(err, jwt) {
                if (err) return next(new Error('Authentication error'));
                socket.jwt = jwt;
                next();
              });
        });
    } catch (e) {
        console.error(e);
    }
}
