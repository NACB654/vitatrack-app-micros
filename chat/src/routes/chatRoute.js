const express = require("express");
const router = express.Router();
const chatService = require("../services/chatService");

router.get("/chat", async (req, res) => {
  const { participant1, participant2 } = req.query;

  try {
    const chat = await chatService.createOrGetChat(participant1, participant2);
    res.status(201).json(chat);
  } catch (err) {
    console.error("Error en la consulta chat", err);
    res.status(500).json({ err: err });
  }
});

module.exports = router;
