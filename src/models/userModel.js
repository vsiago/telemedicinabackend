const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true, unique: true }, // Verifique se está definido corretamente
  password: { type: String, required: true },
  role: { type: String, default: "patient" },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
