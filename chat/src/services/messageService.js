const Message = require("../models/message");

exports.postMessage = async (chat, senderId, content) => {
  const newMessage = new Message({ chat, senderId, content });
  await newMessage.save();

  return newMessage;
};

exports.getMessages = async (chat) => {
  const messages = await Message.find({ chat: chat });
  return messages;
};
