const express = require("express");
const router = express.Router();
const messageService = require("../services/messageService");

router.post("/message", async (req, res) => {
  console.log(req.body);
  const { chat, senderId, content } = req.body;

  try {
    const message = await messageService.postMessage(chat, senderId, content);
    res.status(201).json(message);
  } catch (err) {
    console.error("Error al guardar mensaje", err);
    res.status(500).json({ error: "Error" });
  }
});

router.get("/message/:chat", async (req, res) => {
  const { chat } = req.params;

  try {
    const messages = await messageService.getMessages(chat);
    res.status(201).json(messages);
  } catch (err) {
    console.error("Error al obtener mensajes", err);
    res.status(500).json({ error: "Error" });
  }
});

module.exports = router;
