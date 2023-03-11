const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

// send index.html to client
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/styles.css", (req, res) => {
  res.sendFile(__dirname + "/styles.css");
});

// socket connection
io.on("connection", (socket) => {
  console.log("a user connected");

  // send message to client
  socket.on("chat message", (msg) => {
    // console.log("message: " + msg);

    // send message to all clients
    io.emit("chat message", msg);
  });

  // disconnect
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(3000, () => {
  console.log("http://localhost:3000");
});
