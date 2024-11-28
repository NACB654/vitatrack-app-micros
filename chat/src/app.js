const express = require("express");
const cors = require("cors");
const messages = require("./routes/messageRoute");
const chats = require("./routes/chatRoute");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  }),
);
app.use("/api", messages);
app.use("/api", chats);

module.exports = app;
