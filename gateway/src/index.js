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
    const userRequest = axios.post("http://3.139.101.54/profile/me", {
      userId: id,
    });
    const friendsRequest = axios.post("http://18.191.203.53/amistad/amigos", {
      userId: id,
    });

    const [userResponse, friendsResponse] = await Promise.all([
      userRequest,
      friendsRequest,
    ]);

    const data = {
      user: userResponse?.data,
      friends: friendsResponse?.data,
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
