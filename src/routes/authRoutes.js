// authRoutes.js

const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Rota de Registro de Usuário
router.post("/register", authController.register);

// Rota de Login de Usuário
router.post("/login", authController.login);

// Rota de Logout de Usuário
router.post("/logout", authController.logout);

// Rota para deletar usuário por username
router.delete("/register/:username", authController.deleteUser);

module.exports = router;
