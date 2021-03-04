module.exports = {
    path: '/socket.io/',
    serveClient: true,
    connectTimeout: 45000,
    origins: '*',
    pingTimeout: 5000,
    pingInterval: 25000,
    upgradeTimeout: 10000,
    maxHttpBufferSize: 1e6,
    allowRequest: (req, callback) => {
        //validation here
        callback(null, true);
    },
    cookie: false,
    transports: ["polling","websocket"],
    allowUpgrades: true,
    perMessageDeflate: false,
    httpCompression: true,
    wsEngine: 'ws',
}
