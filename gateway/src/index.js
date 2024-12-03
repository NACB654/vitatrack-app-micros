const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  }),
);

const PORT = 3010;

app.get("/gateway/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const userRequest = axios.post(
      "https://mu630cisu4.execute-api.us-east-2.amazonaws.com/prod/usuarios/profile/me",
      {
        userId: id,
      },
    );
    const friendsRequest = axios.post(
      "https://mu630cisu4.execute-api.us-east-2.amazonaws.com/prod/amigos/amistad/amigos",
      {
        userId: id,
      },
    );
    const habitsRequest = axios.post(
      "https://mu630cisu4.execute-api.us-east-2.amazonaws.com/prod/habitos/habito/hoy",
      {
        userId: id,
      },
    );

    const [userResponse, friendsResponse, habitsResponse] = await Promise.all([
      userRequest,
      friendsRequest,
      habitsRequest,
    ]);

    const data = {
      user: userResponse?.data,
      friends: friendsResponse?.data,
      habits: habitsResponse?.data,
    };

    res.status(200).json(data);
  } catch (err) {
    console.error("Error", err);
    res.status(500).json({ msg: err });
  }
});

app.listen(PORT, () => {
  console.log("Gateway iniciado");
});
