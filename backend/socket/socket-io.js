module.exports = (io) => {
    io.on("connection", (socket) => {
        console.log("user Connected");
        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    });
}
