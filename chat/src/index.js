const app = require("./app");
const http = require("http");
const socket = require("socket.io");
const connectDB = require("./config/database");

connectDB();

const server = http.createServer(app);
const io = socket(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("username", (username) => {
    socket.username = username;
    console.log(`Usuario ${socket.username} logeado`);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });

  socket.on("message", (data) => {
    console.log("Receive:", data);
    io.emit("message", data);
  });
});

server.listen(3007, () => {
  console.log("Escuchando en el puerto 3007");
});
