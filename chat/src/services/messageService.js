const Message = require("../models/message");

exports.postMessage = async (chat, senderID, content) => {
  const newMessage = new Message({ chat, senderID, content });
  await newMessage.save();

  return newMessage;
};

exports.getMessages = async (chat) => {
  const messages = await Message.find({ chat: chat });
  return messages;
};
