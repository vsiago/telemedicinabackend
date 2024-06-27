// authController.js

const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Chave secreta para JWT, idealmente use variáveis de ambiente para isso
const JWT_SECRET = "seu_segredo_super_secreto";

// Registro de Usuário
exports.register = async (req, res) => {
  try {
    const { name, email, username, password } = req.body;

    // Verifique se o usuário já existe
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Usuário já existe" });
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criação do novo usuário
    const user = new User({
      name,
      email,
      username, // Certifique-se de incluir o campo username aqui
      password: hashedPassword,
    });
    await user.save();

    res.status(201).json({ message: "Usuário registrado com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao registrar o usuário", details: error.message });
  }
};

// Login de Usuário
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Verifique se o usuário existe
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: "Usuário não encontrado" });
    }

    // Verifique se a senha está correta
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Senha incorreta" });
    }

    // Geração do token JWT
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ token });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao fazer login", details: error.message });
  }
};

// Deletar Usuário
exports.deleteUser = async (req, res) => {
  try {
    const { username } = req.params;

    // Encontrar e deletar o usuário pelo username
    const deletedUser = await User.findOneAndDelete({ username });

    if (!deletedUser) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    res
      .status(200)
      .json({ message: "Usuário deletado com sucesso", user: deletedUser });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao deletar o usuário", details: error.message });
  }
};

// Logout de Usuário
exports.logout = (req, res) => {
  // Para logout, você pode simplesmente invalidar o token no cliente
  res.status(200).json({ message: "Logout realizado com sucesso" });
};
