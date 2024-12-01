const mongoose = require("mongoose");

const mongoUri =
  process.env.MONGO_URI || "mongodb://localhost:27017/mensajeria";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log("Conectado a monguito");
  } catch (err) {
    console.error("Error al conectar con monguito", err);
    process.exit(1);
  }
};

module.exports = connectDB;
