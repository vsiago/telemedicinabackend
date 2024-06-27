const mongoose = require("mongoose");

const uri =
  "mongodb+srv://vsiago23:4k5kGgO3Rj6tYClK@cluster0.aetbqt4.mongodb.net/telemedicina";

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Conectado ao MongoDB");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB", error);
    process.exit(1);
  }
};

module.exports = connectDB;
