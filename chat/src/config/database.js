const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mensajeria");
    console.log("Conectado a monguito");
  } catch (err) {
    console.error("Error al conectar con monguito", err);
    process.exit(1);
  }
};

module.exports = connectDB;
