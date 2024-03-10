const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const stageRouter = require("./src/routes/stageRouter");

app.use(express.json());
app.use(stageRouter);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`서버 실행 Port : ${PORT}`);
});