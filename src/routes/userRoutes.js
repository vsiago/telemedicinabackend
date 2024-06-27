const express = require("express");
const router = express.Router();
const {
  createUser,
  getUsers,
  editUser,
  deleteUser,
} = require("../controllers/userController");

// Rota para criar usuário
router.post("/", createUser);

// Rota para listar usuários
router.get("/", getUsers);

// Rota para editar usuário
router.put("/:id", editUser);

// Rota para deletar usuário
router.delete("/:id", deleteUser);

module.exports = router;
