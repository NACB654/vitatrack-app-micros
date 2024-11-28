const app = require("./app");
const http = require("http");
const socket = require("socket.io");
const connectDB = require("./config/database");

connectDB();

const server = http.createServer(app);
const io = socket(server, {
  cors: {
    origin: "http://10.0.2.2/3007",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`${socket.id} conectado`);

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
