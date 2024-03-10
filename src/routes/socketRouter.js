const Terminal = require("../models/Terminal");

module.exports = (io) => {
    io.on("connection", (socket) => {
        console.log("클라이언트 연결");

        const terminal = new Terminal();

        terminal.onData((data) => {
            socket.emit("input", data);
        });

        socket.on("output", (message) => {
            terminal.write(message);
        });

        socket.on("resize", (size) => {
            terminal.resize(size.cols, size.rows);
        });

        socket.on("disconnect", () => {
            console.log("클라이언트 종료");
            terminal.destroy();
        });
    });
};
