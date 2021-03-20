const nsBackEnd = require('./back-end.namespace');
const nsUsers = require('./users.namespace');
const nsWeb = require('./web.namespace');

module.exports = function (io){
    nsBackEnd(io);
    nsUsers(io);
    nsWeb(io);
}
