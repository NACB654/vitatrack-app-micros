const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat", require: true },
  senderID: { type: String, require: true },
  content: { type: String },
  sentAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Message", messageSchema);
