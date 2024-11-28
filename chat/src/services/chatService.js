const Chat = require("../models/chat");

exports.createOrGetChat = async (participant1, participant2) => {
  let chat = await Chat.findOne({
    participants: { $all: [participant1, participant2] },
  });

  if (!chat) {
    chat = new Chat({
      participants: [participant1, participant2],
    });

    await chat.save();
  }

  return chat;
};
